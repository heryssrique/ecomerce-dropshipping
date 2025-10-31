// Pegar dados do histórico de pedidos
const urlParams = new URLSearchParams(window.location.search);
const orderId = urlParams.get('order_id');
const orders = JSON.parse(localStorage.getItem('userOrders')) || [];
const orderData = orders.find(order => order.id === orderId);

// Preencher dados na página
if (orderData) {
    document.getElementById('order-number').textContent = orderId;
    document.getElementById('order-total').textContent = orderData.total.toFixed(2);
    
    const itemsContainer = document.getElementById('order-items');
    itemsContainer.innerHTML = orderData.items.map(item => `
        <div class="order-item">
            <p>${item.quantity}x ${item.name} - R$${(item.price * item.quantity).toFixed(2)}</p>
        </div>
    `).join('');
}
