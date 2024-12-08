import React, { useState } from "react";
import Button from "./button";
import Square from "./square_face";
import "../../public/styles.css";

/**
 * Main App Component - Handles the logic for moving a face through various positions and expressions,
 * and renders interactive buttons to control its behavior.
 *
 * Return: rendered App component
 */

function App() {
  // Button configuration array: Defines the label, styles, and associated actions for each button
  const buttons = [
    {
      name: "Move",
      colors: "bg-green-700 hover:bg-green-900",
      action: moveHandler,
    },
    {
      name: "Center",
      colors: "bg-blue-700 hover:bg-blue-900",
      action: centerHandler,
    },
    {
      name: "All",
      colors: "bg-purple-700 hover:bg-purple-900",
      action: allHandler,
    },
    {
      name: "Reset",
      colors: "bg-red-700 hover:bg-red-900",
      action: resetHandler,
    },
  ];

  // Face configuration: Defines expressions and their corresponding positions.
  const faces = [
    { expression: "serious", location: { x: "0%", y: "0%" } },
    { expression: "surprise", location: { x: "calc(100% - 200px)", y: "0%" } },
    {
      expression: "happy",
      location: { x: "calc(100% - 200px)", y: "calc(100% - 200px)" },
    },
    { expression: "sad", location: { x: "0%", y: "calc(100% - 200px)" } },
    {
      expression: "neutral",
      location: { x: "calc(50% - 100px)", y: "calc(50% - 100px)" },
    },
  ];

  // State variables
  const [currentPositionIndex, setCurrentPositionIndex] = useState(0);
  const [lastPositionIndex, setLastPositionIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  /**
   * Handles the "Move" button to updates the square's position and expression by cycling through
   * the `faces` array (indices 0-3) and saves the last position (`lastPostIndex`)
   * to ensure the sequence resumes correctly after interruptions (e.g., "Center").
   */

  function moveHandler() {
    setShowAll(false);
    setCurrentPositionIndex(() => {
      const nextIndex = (lastPositionIndex + 1) % (faces.length - 1);
      setLastPositionIndex(nextIndex);
      return nextIndex;
    });
  }

  // Handles the "Center" button click to display the face at the center position.

  function centerHandler() {
    setShowAll(false);
    setCurrentPositionIndex(4);
  }

  // Handles the "All" button click to display all faces simultaneously.

  function allHandler() {
    setShowAll(true);
  }

  // Handles the "Reset" button click to reset to the initial state.

  function resetHandler() {
    setShowAll(false);
    setCurrentPositionIndex(0);
    setLastPositionIndex(0);
  }

  /**
   * create_button - renders a button based on its configuration.
   * @element {object} - Configuration object for a button.
   * @idx {number} - The index of the button.
   *
   * Return: Button component
   */

  function create_button(element, idx) {
    return (
      <Button
        key={idx}
        label={element.name}
        color={element.colors}
        action={element.action}
      />
    );
  }

  return (
    <div className="flex-cont">
      {/* room - Area containing the rendered faces */}
      <div className="room">
        {showAll ? (
          /* Render all of the faces if the "All" button is pressed */
          faces.map((element, idx) => (
            <Square
              key={idx}
              expression={element.expression}
              position={element.location}
            />
          ))
        ) : (
          /* Render the current face based on the position index */
          <Square
            expression={faces[currentPositionIndex].expression}
            position={faces[currentPositionIndex].location}
          />
        )}
      </div>

      {/* joystick - container with all the interactive buttons */}
      <div className="joystick">{buttons.map(create_button)}</div>
    </div>
  );
}

export default App;
