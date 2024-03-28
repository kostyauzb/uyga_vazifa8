import { text } from "stream/consumers";
import { createTodo, getTodos } from "./db";

export async function GET() {
  return Response.json(getTodos());
}

export async function POST(request: Request) {
  const body = await request.json();
  await createTodo(body.text);
  return Response.json("create");
}
