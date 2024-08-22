import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "../../components/Card";

describe("Card", () => {
  test("this will render the card with details", () => {
    render(
      <Card
        product={{
          image: "https://example.com/image.jpg",
          title: "Shirt",
          description: "Product description",
          price: 19.99,
          category: "Electronics",
          rating: {
            rate: 4.5,
            count: 100,
          },
        }}
      />
    );
    const cardTitleElement = screen.getByText("Shirast");
    expect(cardTitleElement).toBeInTheDocument();
  });
});
