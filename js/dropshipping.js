class DropshippingIntegration {
    constructor(platform, apiKey) {
        this.platform = platform;
        this.apiKey = apiKey;
        this.baseUrl = this._getPlatformUrl();
    }

    _getPlatformUrl() {
        const urls = {
            'oberlo': 'https://api.oberlo.com',
            'cj': 'https://api.cjdropshipping.com',
            'modalgr': 'https://api.modalgr.com.br'
        };
        return urls[this.platform] || '';
    }

    async getProducts() {
        try {
            const response = await fetch(`${this.baseUrl}/products`, {
                headers: { 'Authorization': this.apiKey }
            });
            return await response.json();
        } catch (error) {
            console.error('Erro ao buscar produtos:', error);
            return [];
        }
    }

    async createOrder(orderData) {
        try {
            const response = await fetch(`${this.baseUrl}/orders`, {
                method: 'POST',
                headers: {
                    'Authorization': this.apiKey,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    products: orderData.items.map(item => ({
                        product_id: item.id,
                        quantity: item.quantity
                    })),
                    total: orderData.total
                })
            });
            return await response.json();
        } catch (error) {
            console.error('Erro ao criar pedido:', error);
            return { success: false, message: error.message };
        }
    }
}

// Exemplo de uso:
// const ds = new DropshippingIntegration('cj', 'SUA_API_KEY_AQUI');
// ds.getProducts().then(products => console.log(products));
