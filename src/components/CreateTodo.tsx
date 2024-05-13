import React, { FC, useState } from "react"
import Button from "./Button";
import { useTodoStore } from "../stores/todoStore";
import { generateTodoId } from "../util/misc";

interface ICreateTodoProps { }

const CreateTodo: FC<ICreateTodoProps> = () => {
    const addTodo = useTodoStore((state) => state.addTodo);
    const initState = { title: '', content: '' };
    const [todo, setTodo] = useState(initState);

    const handleAdd = () => { addTodo({ id: generateTodoId(), isCompleted: false, title: todo.title, content: todo.content }); setTodo(initState) }
    return (
        <div className="flex flex-col rounded-lg shadow-lg bg-orange-300 p-4 items-center gap-4 w-[512px] h-[512px]" data-testid="create-todo-container">
            <div className="flex text-xl font-bold">Create new todo</div>
            <div className="flex flex-col w-full">
                <label htmlFor="input">Title*</label>
                <input id="input" onChange={(e) => setTodo({ ...todo, title: e.target.value })} value={todo.title} />
            </div>
            <div className="flex flex-col w-full">
                <label htmlFor="text-area">Add content for new todo*</label>
                <textarea rows={10} id="text-area" onChange={(e) => setTodo({ ...todo, content: e.target.value })} value={todo.content} />
            </div>
            <Button label="Add" className={`border p-4 rounded-lg ${!(!!todo.title && !!todo.content) ? 'cursor-not-allowed bg-gray-400' : 'cursor-pointer bg-orange-200'}`} onClick={handleAdd} isDisabled={!(!!todo.title && !!todo.content)} />
        </div>
    )
};

export default CreateTodo;
