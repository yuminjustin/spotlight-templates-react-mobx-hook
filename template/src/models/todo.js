import { observable } from 'mobx';

export default class Todo {
    store;
    id;
    @observable title;
    @observable completed;

    constructor(store, id, title, completed) {
        this.store = store;
        this.id = id;
        this.title = title;
        this.completed = completed;
    }

    toggle() {
        this.completed = !this.completed;
    }

    setTitle(title) {
        this.title = title;
    }

    destroy() {
        this.store.list.remove(this);
    }

}