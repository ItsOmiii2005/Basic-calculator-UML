## Basic Calculator Web App

This project is a basic calculator web application built using React.js. The calculator can perform basic arithmetic operations such as addition, subtraction, multiplication, and division. Additionally, it supports square root calculations and allows users to clear input, backspace, and evaluate expressions.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Components](#components)
7. [Styling](#styling)
8. [Contributing](#contributing "Contributions are welcome! If you have any suggestions or improvements, please create a pull request or open an issue on the repository.  Fork the repository. Create your feature branch (git checkout -b feature/AmazingFeature). Commit your changes (git commit -m 'Add some amazing feature'). Push to the branch (git push origin feature/AmazingFeature). Open a pull request.")

## Project Overview

This project is developed as part of an internship program by UML (Unified Mentor Learning). The goal of this project is to create a functional and user-friendly calculator that can handle basic arithmetic operations. It is a good practice for enhancing front-end development skills and understanding React.js.

## Features

- User-friendly interface with a responsive design.
- Supports basic arithmetic operations: addition, subtraction, multiplication, and division.
- Supports square root calculations.
- Clear button to reset the input and result.
- Backspace button to remove the last character from the input.
- Displays the evaluated result or an error message for invalid expressions.
- Screenshot :
  ![Screenshot 2024-06-17 203054](https://github.com/ItsOmiii2005/Basic-calculator-UML/assets/101080173/cd11ab78-b420-4d58-8cc0-521f521ad33a)


## Technologies Used

- **React.js**: A JavaScript library for building user interfaces.
- **CSS**: For styling the components.
- **Vite**: A build tool that aims to provide a faster and leaner development experience for modern web projects.

## Installation

To get a local copy up and running, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/basic-calculator.git
   ```
2. **Navigate to the project directory**:

   ```bash
   cd basic-calculator
   ```
3. **Install the dependencies**:

   ```bash
   npm install
   ```
4. **Start the development server**:

   ```bash
   npm run dev
   ```
5. Open your browser and go to `http://localhost:3000`.

## Usage

1. Enter the arithmetic expression using the on-screen buttons.
2. Press the "=" button to evaluate the expression.
3. Use the "Clear" button to reset the input and result.
4. Use the "Backspace" button to remove the last character from the input.

## Components

### Calculator

The main component that renders the calculator interface.

- **State Variables**:

  - `input`: Stores the input expression.
  - `result`: Stores the result of the evaluated expression.
- **Functions**:

  - `handleButtonClick(value)`: Appends the clicked button's value to the current input.
  - `handleBackspace()`: Removes the last character from the input.
  - `handleClear()`: Clears both the input and the result.
  - `handleCalculate()`: Evaluates the input expression, handles square root calculations, and updates the result. Catches and handles errors for invalid expressions.

### Header

The header component that displays the title of the calculator web app.

### Footer

The footer component that provides additional information or credits.

## Styling

The styling for this project is handled using CSS. The styles are defined to ensure the calculator is responsive and user-friendly.

### Example CSS for Buttons (3D Effect)

```css
.buttons button {
  border-radius: 10px;
  padding: 20px;
  font-size: 1.7em;
  border: none;
  background-color: #f0f0f0;
  cursor: pointer;
  transition: background-color 0.2s, box-shadow 0.2s, transform 0.2s;
  box-shadow: 0 5px #bbb, 0 8px 15px rgba(0, 0, 0, 0.1);
}

.buttons button:hover {
  background-color: #ddd;
}

.buttons button:active {
  background-color: #cac97e;
  box-shadow: 0 2px #bbb, 0 4px 8px rgba(0, 0, 0, 0.1);
  transform: translateY(2px);
}
```

## Contributing

Contributions are welcome! If you have any suggestions or improvements, please create a pull request or open an issue on the repository.

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some amazing feature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a pull request.


## **Thanks !**
