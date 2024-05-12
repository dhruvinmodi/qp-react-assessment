import { sampleTodos } from "../mock/todos";
import { Todo } from "../stores/todoStore";

export const generateTodoId = () => {
    return `TODO_ID_${Math.floor(Math.random() * 1000000)}`
}

export const generateDummyTodos = (limit: number) => {
    const todos:Record<string,Todo> = {};
    while(Object.keys(todos).length < limit){
        const id = generateTodoId();
        const index = Math.floor(Math.random() * 100);
        todos[id] = {...sampleTodos[index], id: id}
    }
    return todos;
}