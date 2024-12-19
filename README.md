
# Tic-Tac-Toe Game

A simple web-based Tic-Tac-Toe game that allows two players to play on the same device. This project is designed to help beginners understand game development basics, handling user interactions, and implementing win conditions.

## Features

- **Two-Player Mode**: Playable by two players locally, alternating between "X" and "O".
- **Dynamic Game Board**: Updates the board in real time based on player moves.
- **Win and Draw Detection**: Automatically detects a win or draw and displays the result.
- **Game Reset**: Allows players to reset the game board for a new match.
- **Expandable**: Includes a foundation to add AI for a single-player mode in the future.

## Project Structure

```
TicTacToe/
├── index.html       # Main HTML file for the game UI
├── styles.css       # CSS file for styling the game board and elements
├── script.js        # JavaScript file for game logic and interactions
```

## Technologies Used

- **HTML**: Builds the structure of the game board and user interface.
- **CSS**: Styles the game board and elements.
- **JavaScript**: Implements game logic, win conditions, and interactivity.

## How to Run

1. **Clone the repository** or download the project folder:
   ```bash
   git clone https://github.com/yourusername/tic-tac-toe.git
   cd tic-tac-toe
   ```

2. **Open the game**:
   - Double-click on the `index.html` file to open it in your default web browser.
   - Alternatively, serve the file using a local web server (e.g., Live Server in VS Code).

## How to Play

1. Players take turns selecting a cell on the grid.
2. The first player is "X," and the second player is "O."
3. The game checks for a winner after each move:
   - A win occurs if a player forms a line (horizontal, vertical, or diagonal) of three symbols.
   - The game ends in a draw if all cells are filled with no winner.
4. Use the **Reset Game** button to start a new match.

## Future Enhancements

- **Single-Player Mode**: Add an AI opponent with basic or advanced difficulty.
- **Improved Styling**: Enhance the visual design with animations and better responsiveness.
- **Score Tracking**: Add a scoreboard to track multiple matches.


