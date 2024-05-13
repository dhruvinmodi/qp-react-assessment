import { it, describe } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import TodoItem from '../components/TodoItem';
import { Todo } from '../stores/todoStore';
import { generateTodoId } from '../util/misc';

describe('TodoItem', () => {
    it('should render given todo to dom', () => {
        const id = generateTodoId();
        const todo: Todo = {
            id,
            title: 'todo title',
            content: 'todo content',
            isCompleted: false,
        }
        render(<TodoItem todo={todo} index={0} />);

        expect(screen.getByText(todo.title)).toBeInTheDocument()
        expect(screen.getByText(todo.content)).toBeInTheDocument()
        expect(screen.getByText('Incomplete')).toBeInTheDocument()
    })
})

