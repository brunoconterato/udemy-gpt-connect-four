import React, { useState } from "react";
import "./Connect4.css";

const ROWS = 6;
const COLS = 7;

const Connect4 = () => {
  const [board, setBoard] = useState(
    Array.from({ length: ROWS }, () => new Array(COLS).fill(null))
  );
  const [player, setPlayer] = useState("red");
  const [winner, setWinner] = useState(null);

  const [theme, setTheme] = useState("default");

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
  };

  const restartGame = () => {
    setBoard(Array.from({ length: ROWS }, () => new Array(COLS).fill(null)));
    setPlayer("red");
    setWinner(null);
  };

  const dropCoin = (col) => {
    // Find the first empty slot in the column
    for (let row = ROWS - 1; row >= 0; row--) {
      if (board[row][col] === null) {
        // Update the board with the new move
        const newBoard = [...board];
        newBoard[row][col] = player;
        setBoard(newBoard);

        // Check for a win
        if (checkWin(newBoard, player)) {
          setWinner(player);
          // alert(`${player} wins!`);
          setBoard(
            Array.from({ length: ROWS }, () => new Array(COLS).fill(null))
          );
          setPlayer("red");
        } else {
          // Switch to the other player
          setPlayer(player === "red" ? "yellow" : "red");
        }

        // Exit the function since we found a slot
        return;
      }
    }
  };

  const checkWin = (board, player) => {
    // Check horizontal
    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col <= COLS - 4; col++) {
        if (
          board[row][col] === player &&
          board[row][col + 1] === player &&
          board[row][col + 2] === player &&
          board[row][col + 3] === player
        ) {
          return true;
        }
      }
    }

    // Check vertical
    for (let row = 0; row <= ROWS - 4; row++) {
      for (let col = 0; col < COLS; col++) {
        if (
          board[row][col] === player &&
          board[row + 1][col] === player &&
          board[row + 2][col] === player &&
          board[row + 3][col] === player
        ) {
          return true;
        }
      }
    }

    // Check diagonal (top left to bottom right)
    for (let row = 0; row <= ROWS - 4; row++) {
      for (let col = 0; col <= COLS - 4; col++) {
        if (
          board[row][col] === player &&
          board[row + 1][col + 1] === player &&
          board[row + 2][col + 2] === player &&
          board[row + 3][col + 3] === player
        ) {
          return true;
        }
      }
    }

    // Check diagonal (bottom left to top right)
    for (let row = 3; row < ROWS; row++) {
      for (let col = 0; col <= COLS - 4; col++) {
        if (
          board[row][col] === player &&
          board[row - 1][col + 1] === player &&
          board[row - 2][col + 2] === player &&
          board[row - 3][col + 3] === player
        ) {
          return true;
        }
      }
    }

    // No win found
    return false;
  };

  const renderCoin = (row, col) => {
    const color = board[row][col];
    return <div className={`coin ${color}`} />;
  };

  const renderCell = (row, col) => {
    return (
      <div className="cell" onClick={() => dropCoin(col)} key={`${row}-${col}`}>
        {renderCoin(row, col)}
      </div>
    );
  };

  const renderRow = (row) => {
    const cells = Array.from({ length: COLS }, (_, col) =>
      renderCell(row, col)
    );
    return (
      <div className="row" key={row}>
        {cells}
      </div>
    );
  };

  const renderBoard = () => {
    const rows = Array.from({ length: ROWS }, (_, row) => renderRow(row));
    return <div className={`board ${theme}`}>{rows}</div>;
  };

  return (
    <div className={`connect4 ${theme}`}>
      <h1>Connect 4</h1>
      <div className="status">
        {player === "red" ? "Red's turn" : "Yellow's turn"}
      </div>
      {renderBoard()}
      {winner && (
        <div className="winner">
          <div className={`winner-text ${winner}`}>
            {winner === "red" ? "Red" : "Yellow"} wins!
          </div>
          <button className="restart-button" onClick={restartGame}>
            Restart Game
          </button>
        </div>
      )}
      <div className="themes">
        <button onClick={() => toggleTheme("default")}>Default</button>
        <button onClick={() => toggleTheme("ice")}>Ice</button>
        <button onClick={() => toggleTheme("fire")}>Fire</button>
        <button onClick={() => toggleTheme("snow")}>Snow</button>
        <button onClick={() => toggleTheme("sky")}>Sky</button>
        <button onClick={() => toggleTheme("ocean")}>Ocean</button>
        {/* <button onClick={() => toggleTheme("forest")}>Forest</button>
        <button onClick={() => toggleTheme("desert")}>Desert</button>
        <button onClick={() => toggleTheme("galaxy")}>Galaxy</button>
        <button onClick={() => toggleTheme("space")}>Space</button> */}
      </div>
    </div>
  );
};

export default Connect4;
