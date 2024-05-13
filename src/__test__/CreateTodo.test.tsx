import { it, describe } from '@jest/globals';
import { render,screen } from '@testing-library/react';
import CreateTodo from '../components/CreateTodo';

describe("CreateTodoTest", () => {
    it("should render Create todo component", () => {
        render(<CreateTodo />);
        const container = screen.getAllByTestId('create-todo-container');
        expect(container.length).toBe(1);
    });
});