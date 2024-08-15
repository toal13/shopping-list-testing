import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("App", () => {

  describe("App", () => {
    it("should display an h1", () => {
      render(<App />); 
  
      const heading = screen.getByRole("heading", { level: 1 });
      expect(heading).toBeInTheDocument();  
      expect(heading).toHaveTextContent("Shopping List"); 
    });
    
    it("should include the shopping list", () => {
      render(<App />); 
  
      const list = screen.getByRole("list"); 
      expect(list).toBeInTheDocument();
    });});
});
