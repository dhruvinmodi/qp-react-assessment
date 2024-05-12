import React, { FC } from "react"
import Todos from "../components/Todos";
import CreateTodo from "../components/CreateTodo";
import { useTodoStore } from "../stores/todoStore";

interface IHomeProps { }

const Home: FC<IHomeProps> = () => {
    const todos = useTodoStore((state) => state.todos);
    return (
        <div className="flex flex-col gap-4 relative">
            <h2 className="flex w-full justify-center text-6xl font-bold sticky top-0 bg-white shadow-md p-4 z-10">Todo List</h2>
            <div className="flex justify-center gap-8">
                <Todos />
                <div className="flex flex-col gap-4 sticky top-32 h-fit">
                    <CreateTodo />
                    <div className="flex bg-orange-300 p-4 rounded-lg">Total todos in virtual list: {Object.keys(todos).length}</div>
                </div>
            </div>
        </div>
    )
};

export default Home;
