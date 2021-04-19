export default {
    methods: {
        changeFilter(product) {
            this.getProduct(product.id);
        },
        changeCategory(product) {
            this.getProduct(product.id);
        }
    }
};
  