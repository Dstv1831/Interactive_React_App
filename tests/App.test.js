import React from "react";
import App from "../src/components/App";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("App component", () => {
  // Group of tests related to the initial rendering
  describe("Inital rendering", () => {
    test("Renders the initial face as serious and in the top-left corner", () => {
      render(<App />);
      const face = screen.getByTestId("square-face");

      // Verify that the initial face is rendered and styled correctly
      expect(face).toBeIntheDocument;
      expect(face).toHaveStyle("left: 0%; top: 0%");
    });

    test("Button ", () => {
      render(<App />);
      const buttons = screen.getAllByRole("button");
      expect(buttons).toBeIntheDocument;

      // Verify that all 4 buttons are rendered
      expect(buttons).toHaveLength(4);
    });
  });

  // Group of tests related to button interactions
  describe("Button interactions", () => {
    test("'Move' button updates the position and expression of the face", () => {
      render(<App />);
      const face = screen.getByTestId("square-face");
      const moveButton = screen.getByText("Move");

      // Verify position after the first click
      fireEvent.click(moveButton);
      expect(face).toHaveStyle("left: calc(100% - 200px); top: 0%"); //Position for "Serious"

      // Verify position after the second click
      fireEvent.click(moveButton);
      expect(face).toHaveStyle(
        "left: calc(100% - 200px); top: calc(100% - 200px)"
      ); //Position for "Happy"
    });

    test("'Center' button updates the expresion and centers the face", () => {
      render(<App />);
      const face = screen.getByTestId("square-face");
      const centerButton = screen.getByText("Center");

      // Verify that the face is centered
      fireEvent.click(centerButton);
      expect(face).toHaveStyle(
        "left: calc(50% - 100px); top: calc(50% - 100px)"
      );
    });

    test("'All' button renders all the faces", () => {
      render(<App />);
      let faces = screen.getAllByTestId("square-face");
      const allButton = screen.getByText("All");

      // Verify only one face is initially rendered
      expect(faces).toHaveLength(1);

      // Verify all faces are rendered after clicking the 'All' button
      fireEvent.click(allButton);
      faces = screen.getAllByTestId("square-face");
      expect(faces).toHaveLength(5);
    });
    test("'Reset' button resets the faces to the initial render state", () => {
      render(<App />);
      var face = screen.getByTestId("square-face");
      const moveButton = screen.getByText("Move");
      const resetButton = screen.getByText("Reset");

      // Change the position by clicking 'Move'
      fireEvent.click(moveButton);

      // Reset the face and verify it is back to its initial state
      fireEvent.click(resetButton);
      expect(face).toHaveStyle("left: 0%; top: 0%");
    });
  });
});
