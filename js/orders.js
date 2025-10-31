document.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (!user) {
        window.location.href = 'login.html';
        return;
    }
    
    // Simulação de histórico de pedidos
    const orders = JSON.parse(localStorage.getItem('userOrders')) || [];
    
    const ordersList = document.getElementById('orders-list');
    ordersList.innerHTML = orders.map(order => `
        <div class="order">
            <h3>Pedido #${order.id}</h3>
            <p>Data: ${new Date(order.date).toLocaleDateString()}</p>
            <p>Total: R$${order.total.toFixed(2)}</p>
            <a href="order-confirmation.html?order_id=${order.id}">Ver detalhes</a>
        </div>
    `).join('') || '<p>Nenhum pedido encontrado</p>';
});
