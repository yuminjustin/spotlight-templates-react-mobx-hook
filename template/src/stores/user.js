import axios from 'axios';
import {
    observable
} from 'mobx';

// 用户

export default class Users {
    @observable name = "";

    getUser() {
        axios.get('./static/mock/user.json').then(j => {
            this.name = j.data.data.name
        }).catch(e => {

        })
    }
}