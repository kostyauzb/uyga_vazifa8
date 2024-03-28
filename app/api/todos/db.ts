export interface ITodo {
  text: string;
  completed: boolean;
}

const todosDb = new Map<number, ITodo>();

todosDb.set(1, { text: "Task 1", completed: false });

let id = 1;

export function getTodos(id?: number) {
  if (id) return { id, ...todosDb.get(id) };

  return Array.from(todosDb, ([key, value]) => ({ ...value, id: key }));
}

export function createTodo(todo: string) {
  const new_todo = {
    text: todo,
    completed: false,
  };
  todosDb.set(++id, new_todo);
}

export function deleteTodo(id: number) {
  todosDb.delete(id);
}

export function updateTodo(id: number, body: ITodo) {
  if (todosDb.has(id)) {
    const prevTodo = todosDb.get(id)!;
    todosDb.set(id, { ...prevTodo , ...body});
  }
}
