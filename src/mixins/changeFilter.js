export default {
    methods: {
        changeFilter(product) {
            this.getData(product.alias);
        },
        changeCategory(product) {
            this.getData(product.alias);
        }
    }
};
  