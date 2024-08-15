import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ShoppingList from "./ShoppingList";

describe("ShoppingList", () => {
  // Integration between ShoppingList and ItemInput
  it("should render an input with a submit button", () => {
    render(<ShoppingList />);

    expect(screen.getByPlaceholderText("Add new item")).toBeVisible();
    expect(screen.getByRole("button", { name: /add/i })).toHaveTextContent("Add");
  });

  it("should add a new item to the list when the form is submitted", () => {
    render(<ShoppingList />);

    // Act
    fireEvent.input(screen.getByPlaceholderText("Add new item"), { target: { value: "Milk" } });
    fireEvent.click(screen.getByRole("button", { name: /add/i }));

    // Assert
    expect(screen.getByText("Milk")).toBeInTheDocument();
  });

  it("should be possible to add multiple items to the shopping list", () => {
    render(<ShoppingList />);

    fireEvent.input(screen.getByPlaceholderText("Add new item"), {
      target: { value: "Milk" },
    });
    fireEvent.click(screen.getByText("Add"));

    fireEvent.input(screen.getByPlaceholderText("Add new item"), {
      target: { value: "Bread" },
    });
    fireEvent.click(screen.getByText("Add"));

    expect(screen.getByText("Milk")).toBeInTheDocument();
    expect(screen.getByText("Bread")).toBeInTheDocument();
  });

  it("should remove an item when the remove button is clicked", () => {
    render(<ShoppingList />);

    // Add an item first
    fireEvent.input(screen.getByPlaceholderText("Add new item"), { target: { value: "Bread" } });
    fireEvent.click(screen.getByRole("button", { name: /add/i }));

    // Assert item is added
    expect(screen.getByText("Bread")).toBeInTheDocument();

    // Remove the item
    fireEvent.click(screen.getByText("Remove"));

    // Assert item is removed
    expect(screen.queryByText("Bread")).not.toBeInTheDocument();
  });
});
