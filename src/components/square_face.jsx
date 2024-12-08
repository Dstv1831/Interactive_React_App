import React from "react";

/**
 * Square Component - Represents a face with eyes and a mouth, positioned dynamically.
 * @props - The properties passed to the square component.
 * @props.position {object} - The position of the square component, with `x` and `y` coordinates.
 * @props.expression {string} - The CSS class defining the expression of the face.
 *
 * Return: Rendered square component
 */

function Square(props) {
  // Define the inline styles for dynamic positioning
  const positions = {
    left: props.position.x,
    top: props.position.y,
  };

  return (
    <div
      id="squareface"
      data-testid="square-face"
      style={positions}
      className={props.expression}
    >
      <div className="eye left"></div>
      <div className="eye right"></div>
      <div className="mouth"></div>
    </div>
  );
}

export default Square;
