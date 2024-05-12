import { create } from 'zustand';
import { generateDummyTodos } from '../util/misc';

export type Todo = {
    id: string;
    title: string;
    isCompleted: boolean;
    content: string;
}

type State = {
    todos: { [id: string]: Todo };
}

type Actions = {
    addTodo: (todo: Todo) => void;
    updateTodo: (id: string, todo: Todo) => void;
}

export const useTodoStore = create<State & Actions>((set) => ({
    todos: generateDummyTodos(10000),
    addTodo: (todo: Todo) => set(({ todos }) => ({ todos: { [todo.id]: todo, ...todos } })),
    updateTodo: (id: string, todo: Todo) => set(({ todos }) => ({ todos: { ...todos, [id]: { ...todo } } }))
}))