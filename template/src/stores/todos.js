import { observable, computed } from 'mobx';
import Todo from '../models/todo'

export default class TodoStore {
    @observable list = [];

    @computed get noChoose() {
        return this.list.reduce(
            (sum, todo) => sum + (todo.completed ? 0 : 1),
            0
        )
    }

    @computed get active() {
        return this.list.length - this.noChoose;
    }

    @computed get chooseAll() {
        return this.list.length != 0 && this.noChoose == 0;
    }

    constructor(array) {
        this.list = array || [];
    }

    addTodo(title) {
        this.list.push(new Todo(this, this.list.length, title, false));
    }

    toggle() {
        let bool = this.chooseAll;
        this.list.map(todo => {
            todo.completed = bool ? !1 : !0
            return todo;
        })
    }

    delete(){
        let arr = []
        this.list.map(todo => {
            if(!todo.completed) arr.push(todo)
        });
        this.list = arr;
    }

}