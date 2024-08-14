import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("App", () => {
  it("should be possible to add an item to the shopping list", () => {
    render(<App />);

    fireEvent.input(screen.getByPlaceholderText("Add new item"), {
      target: { value: "Milk" },
    });

    fireEvent.click(screen.getByText("Add"));

    expect(screen.getByText("Milk")).toBeInTheDocument();
  });

  it("should be possible to add multiple items to the shopping list", () => {
    render(<App />);

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

  it("should be possible to remove an item from the shopping list", () => {
    render(<App />);

    fireEvent.input(screen.getByPlaceholderText("Add new item"), {
      target: { value: "Milk" },
    });
    fireEvent.click(screen.getByText("Add"));

    fireEvent.click(screen.getByText("Remove"));

    expect(screen.queryByText("Milk")).not.toBeInTheDocument();
  });
});
