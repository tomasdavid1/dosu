import { NextResponse } from "next/server";
import { getTodos, addTodo, deleteTodo } from "../state";

// GET: Fetch all TODOs
export async function GET() {
  return NextResponse.json(getTodos(), { status: 200 });
}

// POST: Add a new TODO
export async function POST(req: Request) {
  try {
    const { text } = await req.json();
    if (!text) {
      return NextResponse.json({ error: "Text is required" }, { status: 400 });
    }
    const newTodo = addTodo(text);
    return NextResponse.json(newTodo, { status: 201 });
  } catch (error) {
    
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

// DELETE: Remove a TODO
export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();
    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }
    deleteTodo(id);
    return NextResponse.json({ message: "Todo deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
