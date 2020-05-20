import TodoS from './todos';
import TypeS from './types';
import User from './user';

const todos = new TodoS();
const types = new TypeS();
const user = new User();

export default {
    todos,
    types,
    user
}