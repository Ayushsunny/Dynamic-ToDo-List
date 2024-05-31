# Dynamic Todo List

This is a Dynamic Todo List application built with React. The application allows users to manage tasks by dragging and dropping cards between columns: TODO, IN PROGRESS, and COMPLETED. The application also features a "burn barrel" for deleting tasks.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)


## Features

- Drag and drop cards between columns
- Add new tasks
- Delete tasks by dragging to the burn barrel
- Responsive design

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd dynamic-todo-list
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the application:
   ```bash
   npm start
   ```

2. Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Folder Structure

```plaintext
Dynamic ToDo List/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── AddCard.js
│   │   ├── Board.js
│   │   ├── BurnBarrel.js
│   │   ├── Card.js
│   │   ├── Column.js
│   │   ├── DropIndicator.js
│   │   └── DynamicTodo.js
│   ├── styles/
│   │   └── index.css
│   ├── utils/
│   │   └── constants.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── .gitignore
├── package.json
└── README.md
```

### Components

- `AddCard.js`: Component to add a new card to the TODO column.
- `Board.js`: Main board component that holds the columns.
- `BurnBarrel.js`: Component to delete cards.
- `Card.js`: Individual card component.
- `Column.js`: Column component that holds cards.
- `DropIndicator.js`: Indicator to show where cards can be dropped.
- `DynamicTodo.js`: Main Todo board wrapper component.

### Utilities

- `constants.js`: File to store default card data and other constants.

### Styles

- `index.css`: Custom styles for the TODO application.
