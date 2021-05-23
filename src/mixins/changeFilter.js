export default {
    methods: {
        changeFilter(id, category_id) {
            this.getData(id, category_id);
        },
        changeCategory(id) {
            this.getData(id);
        }
    }
};
  