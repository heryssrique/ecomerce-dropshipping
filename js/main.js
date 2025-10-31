// Scripts principais
console.log('Loja Dropshipping inicializada');

const cart = {
    items: [],
    addItem(product) {
        const existingItem = this.items.find(item => item.id === product.id);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            this.items.push({ ...product, quantity: 1 });
        }
        this.updateCart();
    },
    updateCart() {
        // Atualizar interface
        const cartItemsEl = document.querySelector('.cart-items');
        cartItemsEl.innerHTML = this.items.map(item => `
            <div class="cart-item">
                <img src="${item.image}" width="50">
                <div>
                    <h4>${item.name}</h4>
                    <p>R$${item.price.toFixed(2)} x ${item.quantity}</p>
                </div>
            </div>
        `).join('');

        // Atualizar total
        const total = this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        document.querySelector('.total-amount').textContent = total.toFixed(2);
        document.querySelector('.cart-count').textContent = this.items.length;
    },
    async checkout() {
        if (this.items.length === 0) return;
        
        const user = JSON.parse(localStorage.getItem('currentUser'));
        if (!user) {
            alert('Por favor, faça login para finalizar a compra');
            window.location.href = 'login.html';
            return;
        }
        
        const orderData = {
            id: Date.now().toString(),
            date: new Date().toISOString(),
            items: this.items,
            total: this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
        };
        
        // Salvar pedido no histórico
        const orders = JSON.parse(localStorage.getItem('userOrders')) || [];
        orders.push(orderData);
        localStorage.setItem('userOrders', JSON.stringify(orders));
        
        // Redirecionar para confirmação
        window.location.href = `order-confirmation.html?order_id=${orderData.id}`;
    }
};

import { DropshippingIntegration } from './dropshipping.js';

document.addEventListener('DOMContentLoaded', async () => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
        const user = JSON.parse(storedUser);
        if (user && user.isLoggedIn) {
            const loginLink = document.querySelector('.login-link');
            if (loginLink) {
                loginLink.textContent = user.name;
                loginLink.href = '#';
            }
        }
    }

    // Substitua pela sua API Key real
    const apiKey = 'SUA_API_KEY_AQUI';
    const ds = new DropshippingIntegration('cj', apiKey);
    
    try {
        const products = await ds.getProducts();
        renderProducts(products);
        setupCart();
    } catch (error) {
        console.error('Falha ao carregar produtos:', error);
    }
});

function renderProducts(products) {
    const container = document.querySelector('.produtos');
    
    products.forEach(product => {
        const productEl = document.createElement('div');
        productEl.className = 'produto';
        productEl.dataset.id = product.id;
        productEl.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="old-price">De: R$${product.oldPrice.toFixed(2)}</p>
            <p class="price">Por: R$${product.price.toFixed(2)}</p>
            <button class="buy-btn">Comprar</button>
        `;
        container.appendChild(productEl);
    });
}

function setupCart() {
    document.querySelectorAll('.buy-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productEl = e.target.closest('.produto');
            const product = {
                id: productEl.dataset.id,
                name: productEl.querySelector('h3').textContent,
                price: parseFloat(productEl.querySelector('.price').textContent.replace('Por: R$', '')),
                image: productEl.querySelector('img').src
            };
            cart.addItem(product);
        });
    });

    document.querySelector('.cart-toggle').addEventListener('click', () => {
        document.querySelector('.cart-sidebar').classList.toggle('active');
    });
}
