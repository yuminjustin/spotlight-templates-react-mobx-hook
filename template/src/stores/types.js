import {observable} from 'mobx';

export default class TypeStore {
    @observable type = 0;
    // 0 所有  1 未选择  2 已选择
}