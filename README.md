
![Screenshot 2024-12-08 121128](https://github.com/user-attachments/assets/0e12fb3e-1825-4ba7-b03b-beabff14cb30)

___


# REACT - INTERACTIVE APP

This React application demonstrates a face that moves through various positions and expressions based on button interactions. It uses state management to handle transitions and displays all faces simultaneously when required.
___


## Table of Contents

1. [Setup Instructions](#setup-instructions)
2. [Button Logic](#button-logic)
3. [Folder Structure](#folder-structure)
4. [Testing](#testing)
5. [Additional Notes](#additional-notes)
6. [Contact](#contact)

___


## Setup Instructions

### Prerequisites

Make sure you have the following installed on your system:

-   **Node.js**: [Download here](https://nodejs.org/).
    
-   **npm**: Comes bundled with Node.js.

### Steps to Run the Project Locally
Run the following commands in your terminal (Command Line, VS terminal or Git Bash):

1.  **Clone the Repository or Download the Zipfile**:

    
    ```
    git clone <repository-url>
    ```
    ![Screenshot 2024-12-08 123902](https://github.com/user-attachments/assets/eca2dd5a-4400-487b-ad33-586d94a0485d)

    
2.  **Set your working directory** :

	```
	cd <repository-folder>
	```
3.  **Install Dependencies**:
    
    ```
    npm install
    ```
    
4.  **Start the Development Server**:
    
    ```
    npm run dev
    ```
    
    This will open the app in your default browser at 
    
    `http://localhost:5173/ `.
    

## Button Logic

Here’s how each button operates:

### 1. **Move Button**

-   Cycles through predefined positions (`faces` array) sequentially.
    
-   Updates the `currentPositionIndex` to display the next face.
    
-   Tracks the `lastPositionIndex` to ensure the sequence resumes correctly after interruptions.
    

### 2. **Center Button**

-   Directly sets the `currentPositionIndex` to the center position.
    
-   Displays the face at the center of the screen.
    

### 3. **All Button**

-   Sets `showAll` state to `true`.
    
-   Renders all faces simultaneously by mapping through the `faces` array.
    

### 4. **Reset Button**

-   Resets the `currentPositionIndex` and `lastPositionIndex` to their initial state (`0`).
    
-   Sets `showAll` to `false`, ensuring only the initial face is displayed.

## Folder Structure

The key files and their purposes :

-   `.../src/index.jsx`: This file sets up the React application by rendering the App component into the DOM.

-   `.../src/components/App.jsx`: Contains the main logic and renders the face and buttons components.
    
-   `.../src/components/Button.jsx`: Represents the button component used for user interaction.
    
-   `.../src/components/Square.jsx`: Represents the face (square) component with dynamic positioning and expressions.
    
-   `.../public/styles.css`: Contains the styles for the application.

-   `.../tests/App.test.js`: This file contains a set of tests for the `App` component using the **React Testing Library** and **Jest**.


## Testing

The project uses `@testing-library/react`, `@testing-library/jest-dom` and `jest` for testing. Tests are included to:

1.  Validate initial rendering of the application (face and buttons).
    
2.  Ensure correct behavior for each button:
    
    -   `Move` - Updates the position sequentially.
        
    -   `Center` - Moves the face to the center.
        
    -   `All` - Displays all faces.
        
    -   `Reset` - Resets the state.

**Run Tests**:

```
npm run dev
 ```

This will execute the test suite to validate button functionality and state transitions.

## Additional Notes

-   The project uses React functional components and hooks for state management.
    
-   The styling is achieved through a combination of traditional CSS and TailwindCSS utility classes.

- Additionally, custom media queries adjust the button's width and margin based on the screen size, ensuring it looks good across different devices.

___


## Contact

Please feel free to get in touch regarding any matter (specially about mistakes, recommendations and errors)

David Tangarife
- https://github.com/Dstv1831
- www.linkedin.com/in/david-tangarife-6b775a1b9
