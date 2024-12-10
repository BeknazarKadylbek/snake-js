# Snake Game Documentation

## Overview
This is a simple implementation of the classic **Snake Game** using HTML, CSS, and JavaScript. The game allows players to control the snake, eat food, grow in size, and avoid collisions with walls or itself. The game includes a menu system with difficulty selection, a canvas to render the game, and a game-over screen displaying the score.

### Features
- Difficulty levels (Easy, Medium, Hard) with adjustable speed.
- Snake movement controlled via arrow keys.
- Snake grows when it eats food.
- Game-over screen displaying the player's score and options to restart or return to the main menu.
- Dynamic food generation with collision detection to avoid overlap with the snake.

### How to Play
1. Click the "Start" button to begin the game and select the difficulty.
2. Use the **arrow keys** to control the direction of the snake:
   - Left Arrow: Move left
   - Up Arrow: Move up
   - Right Arrow: Move right
   - Down Arrow: Move down
3. The goal is to eat the food that appears on the grid. Every time the snake eats food, it grows in size, and the score increases.
4. Avoid hitting the walls or the snake's own body. If the snake collides with either, the game ends.
5. After the game ends, you can view your final score and choose to restart the game or go back to the main menu.

## Installation

To play the Snake Game on your local machine, follow these steps:

1. **Clone the repository** or download the files.
2. **Open the `index.html` file** in any modern web browser (Google Chrome, Firefox, etc.).
   - The game will automatically load, and you can start playing immediately.
3. **No installation required**, as all the necessary resources are included in the project files.

## Project Files

- **`index.html`**: HTML file that contains the structure of the game. This file includes the layout for the main menu, difficulty selection, game canvas, and game-over screen.
  
- **`style.css`**: CSS file for styling the game interface, including the layout of buttons, menus, canvas, and animations (e.g., hover effects for buttons, background grid for the game).
  
- **`snake.js`**: JavaScript file containing the game logic. This file handles the game mechanics like snake movement, food generation, collision detection, scoring, and game state management (starting, restarting, game over).

## How the Game Works

- The game board is drawn on a canvas element, where the snake moves in a grid-like fashion.
- Each movement of the snake is controlled by updating its position on the canvas. The snake grows when it eats food, and the game ends if the snake collides with itself or the walls.
- The difficulty level determines the speed of the game (how fast the snake moves). The speed can be selected from the menu before starting the game:
  - **Easy**: Slow speed (150ms per move)
  - **Medium**: Medium speed (100ms per move)
  - **Hard**: Fast speed (50ms per move)

### Game Flow
1. The user clicks the "Start" button to begin the game.
2. The user selects a difficulty level.
3. The game starts, and the snake moves automatically. The user controls the snake using the arrow keys.
4. The snake eats food, grows, and the score increases.
5. The game ends if the snake collides with the walls or itself.
6. The user can restart the game or return to the main menu after the game ends.

## File Structure

