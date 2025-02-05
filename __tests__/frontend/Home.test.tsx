import { render, screen, fireEvent } from "@testing-library/react";
import Home from "../../app/page";

describe("Home Page", () => {
  it("renders the heading", () => {
    render(<Home />);
    expect(screen.getByText("TODO App 📝")).toBeInTheDocument();
  });

  it("adds a new todo", async () => {
    render(<Home />);

    const input = screen.getByPlaceholderText("Add a new TODO...");
    const addButton = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "Learn Next.js" } });
    fireEvent.click(addButton);

    expect(await screen.findByText("Learn Next.js")).toBeInTheDocument();
  });

  it("deletes a todo", async () => {
    render(<Home />);

    const input = screen.getByPlaceholderText("Add a new TODO...");
    const addButton = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "Delete Me" } });
    fireEvent.click(addButton);

    const deleteButton = await screen.findByText("❌");
    fireEvent.click(deleteButton);

    expect(screen.queryByText("Delete Me")).not.toBeInTheDocument();
  });
});
