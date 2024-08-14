import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import ItemInput from "./ItemInput";

describe("ItemInput", () => {
  it("should render an input field and a button", () => {
    render(<ItemInput addItem={() => {}} />);
    expect(screen.getByPlaceholderText("Add new item")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /add/i })).toBeInTheDocument();
  });

  it("should call addItem when the form is submitted with a non-empty input", () => {
    const mockAddItem = vi.fn();
    render(<ItemInput addItem={mockAddItem} />);
    
    fireEvent.change(screen.getByPlaceholderText("Add new item"), {
      target: { value: "Milk" },
    });
    fireEvent.click(screen.getByRole("button", { name: /add/i }));

    expect(mockAddItem).toHaveBeenCalledTimes(1);
    expect(mockAddItem).toHaveBeenCalledWith("Milk");
  });

  it("should not call addItem when the input is empty", () => {
    const mockAddItem = vi.fn();
    render(<ItemInput addItem={mockAddItem} />);
    
    fireEvent.click(screen.getByRole("button", { name: /add/i }));

    expect(mockAddItem).not.toHaveBeenCalled();
  });

  it("should not call addItem when the input is only whitespace", () => {
    const mockAddItem = vi.fn();
    render(<ItemInput addItem={mockAddItem} />);
    
    fireEvent.change(screen.getByPlaceholderText("Add new item"), {
      target: { value: "    " },
    });
    fireEvent.click(screen.getByRole("button", { name: /add/i }));

    expect(mockAddItem).not.toHaveBeenCalled();
  });
  
  it("should clear the input after adding an item", () => {
    const mockAddItem = vi.fn();
    render(<ItemInput addItem={mockAddItem} />);
    
    fireEvent.change(screen.getByPlaceholderText("Add new item"), {
      target: { value: "Bread" },
    });
    fireEvent.click(screen.getByRole("button", { name: /add/i }));
    
    expect(screen.getByPlaceholderText("Add new item")).toHaveValue("");
  });
});
