import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import ShoppingItem from "./ShoppingItem";

describe("ShoppingItem", () => {
  it("should render an item with a remove button", () => {
    const mockItem = { id: 1, name: "Milk" };
    render(<ShoppingItem item={mockItem} removeItem={vi.fn()} />);

    expect(screen.getByText("Milk")).toBeVisible();
    expect(screen.getByRole("button", { name: /remove/i })).toHaveTextContent("Remove");
  });

  it("should call removeItem with the item's id when the remove button is clicked", () => {
    const mockItem = { id: 1, name: "Bread" };
    const handleRemoveItem = vi.fn();
    render(<ShoppingItem item={mockItem} removeItem={handleRemoveItem} />);

    fireEvent.click(screen.getByRole("button", { name: /remove/i }));

    expect(handleRemoveItem).toBeCalledWith(1);
  });
});
