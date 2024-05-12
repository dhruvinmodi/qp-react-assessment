import React, {forwardRef} from "react"
import { Todo, useTodoStore } from "../stores/todoStore";
import Button from "./Button";

interface ITodoProps {
    todo: Todo;
    index: number;
}

const TodoItem = forwardRef(({todo, index}: ITodoProps, ref: any) => {
  const updateTodo = useTodoStore((state) => state.updateTodo)
  const handleOnClick = () => {
    updateTodo(todo.id, {...todo, isCompleted: !todo.isCompleted})
  }
    return (
      <div
        ref={ref}
        className="flex flex-col w-full items-center bg-slate-100 rounded-xl my-4 p-4 gap-2 relative overflow-hidden"
      >
        <div className="absolute bottom-0 left-0 p-4 rounded bg-zinc-200">Todo index: {index + 1}</div>
        <div className="font-bold text-2xl text-center">{todo.title}</div>
        <p>
          {todo.content}
        </p>
        <Button label={todo.isCompleted? "Completed" : "Incomplete"} className={`cursor-pointer border hover:shadow-lg p-4 ${todo.isCompleted ? "text-green-500 bg-green-100" : 'text-red-500 bg-red-100'}` } onClick={handleOnClick} />
      </div>
    );
  });
  

export default TodoItem;
