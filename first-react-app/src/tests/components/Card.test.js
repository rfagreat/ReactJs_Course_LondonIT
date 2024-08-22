import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "../../components/Card";

describe("Card", () => {
  test("This will test card description", () => {
    const product = {
      image: "https://example.com/image.jpg",
      title: "Product Title",
      description: "Product description",
      price: 19.99,
      category: "Electronics",
      rating: {
        rate: 4.5,
        count: 100,
      },
    };
    render(<Card product={product} />);
    const descriptionElement = screen.getByText("Product description");
    expect(descriptionElement).toBeInTheDocument();
  });
});
