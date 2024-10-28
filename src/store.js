import { createStore } from 'vuex';

export default createStore({
    state: {
        products: JSON.parse(localStorage.getItem('products') || '[]'),
        cart: JSON.parse(localStorage.getItem('cart') || '[]'),
    },

    mutations: {
        addToCart(state, product) {
            const item = state.cart.find(item => item.product.id === product.id);
            if (item) {
                item.quantity++;
            } else {
                state.cart.push({ product, quantity: 1 });
            }
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        updateQuantity(state, { product, quantity }) {
            const item = state.cart.find(item => item.product.id === product.id);
            if (item) {
                if (quantity > 0) {
                    item.quantity = quantity;
                } else {
                    state.cart = state.cart.filter(i => i.product.id !== product.id);
                }
            }
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        addProduct(state, product) {
            state.products.push(product);
            localStorage.setItem('products', JSON.stringify(state.products));
        }
    }
});