import { ITodo, deleteTodo, getTodos, updateTodo } from "../db";

export async function GET(_: any, { params }: { params: { id: string } }) {
  const id = +params.id;
  const data = await getTodos(id);
  return Response.json(data);
}

export async function DELETE(_: any, { params }: { params: { id: string } }) {
  const id = +params.id;
  const data = deleteTodo(id);
  return Response.json("deleted");
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = +params.id;
  const body = await request.json();

  updateTodo(id, body);

  return Response.json("update");
}
