export interface Todo {
    id: string;
    text: string;
    completed: boolean;
  }
  
  let todos: Todo[] = [];

  export const resetTodos = () => {
    todos = [];
  };
  
  export const getTodos = () => todos;
  
  export const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      text,
      completed: false,
    };
    todos.push(newTodo);
    return newTodo;
  };
  
  export const deleteTodo = (id: string) => {
    todos = todos.filter((todo) => todo.id !== id);
    return todos;
  };
  