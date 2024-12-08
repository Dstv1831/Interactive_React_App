import React from "react";

/**
 * Button Component - A reusable button that accepts styling, label, and an action as props.
 * @props - The properties passed to the button component.
 * @props.color {string} - The CSS classes for styling the button.
 * @props.action {function} - The function to be executed on button click.
 * @props.label {string} - The text to display on the button.
 * 
 * Return: Rendered button component
 */

function Button(props) {
    return (<button className={props.color} onClick={props.action}>{props.label}</button>);
}

export default Button;