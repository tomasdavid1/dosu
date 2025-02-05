import { GET, POST, DELETE } from "../../app/api/todos/route";
import { resetTodos } from "../../app/api/state";

describe("API - Todos", () => {
  beforeEach(() => {
    // Reset state before each test (if using in-memory storage)
    resetTodos();
  });

  it("GET /api/todos should return an empty array initially", async () => {
    const response = await GET();
    const todos = await response.json();

    expect(response.status).toBe(200);
    expect(todos).toEqual([]);
  });

  it("POST /api/todos should add a new todo", async () => {
    const newTodo = { text: "Learn Testing" };
    const request = new Request("http://localhost:3000/api/todos", {
      method: "POST",
      body: JSON.stringify(newTodo),
      headers: { "Content-Type": "application/json" },
    });

    const response = await POST(request);
    const createdTodo = await response.json();

    expect(response.status).toBe(201);
    expect(createdTodo.text).toBe(newTodo.text);
  });

  it("DELETE /api/todos should delete a todo", async () => {
    // First, add a todo
    const newTodo = { text: "Learn Jest" };
    const request = new Request("http://localhost:3000/api/todos", {
      method: "POST",
      body: JSON.stringify(newTodo),
      headers: { "Content-Type": "application/json" },
    });

    const addResponse = await POST(request);
    const addedTodo = await addResponse.json();

    // Then, delete the added todo
    const deleteRequest = new Request("http://localhost:3000/api/todos", {
      method: "DELETE",
      body: JSON.stringify({ id: addedTodo.id }),
      headers: { "Content-Type": "application/json" },
    });

    const deleteResponse = await DELETE(deleteRequest);
    const deleteResult = await deleteResponse.json();

    expect(deleteResponse.status).toBe(200);
    expect(deleteResult.message).toBe("Todo deleted");
  });
});
