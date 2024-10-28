import { createStore } from 'vuex';

const initialProducts = [
    { id: '1', name: 'Product 1', description: 'Description 1', price: 19.99 },
    { id: '2', name: 'Product 2', description: 'Description 2', price: 29.99 },
    { id: '3', name: 'Product 3', description: 'Description 3', price: 39.99 },
];

const saveCartToLocalStorage = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
};

const saveProductsToLocalStorage = (products) => {
    localStorage.setItem('products', JSON.stringify(products));
};

const getInitialProducts = () => {
    const products = JSON.parse(localStorage.getItem('products'));
    if (products && products.length > 0) {
        return products;
    } else {
        saveProductsToLocalStorage(initialProducts);
        return initialProducts;
    }
};

export default createStore({
    state: {
        products: getInitialProducts(),
        cart: JSON.parse(localStorage.getItem('cart')) || [],
    },
    mutations: {
        setProducts(state, products) {
            state.products = products;
            saveProductsToLocalStorage(state.products);
        },
        addToCart(state, product) {
            const item = state.cart.find((item) => item.product.id === product.id);
            if (item) {
                item.quantity++;
            } else {
                state.cart.push({ product, quantity: 1 });
            }
            saveCartToLocalStorage(state.cart);
        },
        updateQuantity(state, { product, quantity }) {
            const item = state.cart.find((item) => item.product.id === product.id);
            if (item) {
                if (quantity > 0) {
                    item.quantity = quantity;
                } else {
                    state.cart = state.cart.filter((i) => i.product.id !== product.id);
                }
            }
            saveCartToLocalStorage(state.cart);
        },
        addProduct(state, product) {
            state.products.push(product);
            saveProductsToLocalStorage(state.products);
        },
    },
});
