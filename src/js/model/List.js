import uniqid from "uniqid";


export default class list {
    constructor() {
        this.items = [];
    }

    deletItem(id) {
        // id гэдэг id тэй орцыг массав аас хайж олно.
        const index = this.items.findIndex(el => el.id === id);
        // Уг индекс дээрх элментийг массиваас устгана
        this.items.splice(index, 1);

    }

    addItem(item) {
        let newItem = {
            id: uniqid(),
            // item: item
            // es6 дээрхийг доорх байдлаар бичиж болно.
            item
        }
        this.items.push(newItem);
        return newItem;
    }
}