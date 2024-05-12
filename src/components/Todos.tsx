import React, { FC, LegacyRef } from "react"
import { useTodoStore } from "../stores/todoStore";
import useVirtual from 'react-cool-virtual';
import TodoItem from "./TodoItem";

interface ITodosProps { }

const Todos: FC<ITodosProps> = () => {
    const todos = useTodoStore((state) => state.todos);
    const todoIds = Object.keys(todos);
    const { outerRef, innerRef, items } = useVirtual({
        itemCount: todoIds.length,
    });
    return (
        <div className="w-[512px] h-[90vh] overflow-auto" ref={outerRef as LegacyRef<HTMLDivElement>}>
            <div ref={innerRef as LegacyRef<HTMLDivElement>} className="px-4">
                {items.map(({ index, measureRef }: any) => (
                    <TodoItem ref={measureRef} todo={todos[todoIds[index]]} key={todoIds[index]} index={index} />
                ))}
            </div>
        </div>
    )
};

export default Todos;
