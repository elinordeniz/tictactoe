import { useContext, createContext, useEffect, useState } from "react";
import { Patterns } from "../Patterns";

const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const Players = ["X", "O"];
  const initialScore = { X: 0, O: 0 };
  const initialBoard = ["", "", "", "", "", "", "", "", ""];

  const [gameBoard, setGameBoard] = useState(initialBoard);

  const [isGameActive, setIsGameActive] = useState(true);
  const [currentPlayer, setCurrentPlayer] = useState(Players[0]);
  const [scores, setScores] = useState(initialScore);
  const [isWinner, setIsWinner] = useState(false);
  const [winner, setWinner] = useState("");
  const [isTied, setIsTied] = useState(false);

  const setBoard = (square) => {
    setGameBoard(
      gameBoard.map((currentValue, index) => {
        if (index === square && currentValue === "") {
          return currentPlayer;
        }
        return currentValue;
      })
    );
  };

  const togglePlayer = () => {
    setCurrentPlayer(currentPlayer === Players[0] ? Players[1] : Players[0]);
  };

  const selectSquare = (square) => {
    if (isGameActive && gameBoard[square] === "") {
      setBoard(square);
    }
  };

  const checkForTie = () => {
    let isBoardFull = gameBoard.every((area) => area.length !== 0);
    if (isBoardFull && !isWinner) {
      setIsTied(true);
      setIsGameActive(false);

      return true;
    } else return false;
  };

  const checkForWin = (player) => {
    Patterns.map((pattern) => {
      let v1 = gameBoard[pattern[0]] === player;
      let v2 = gameBoard[pattern[1]] === player;
      let v3 = gameBoard[pattern[2]] === player;
      if (v1 !== "" || v2 !== "" || v3 !== "") {
        if (v1 && v2 && v3) {
         
          setIsWinner(true);
          setIsGameActive(false);
          setWinner(player);

          setScores({ ...scores, [player]: scores[player] + 1 });
   
         }
      }
    });
    togglePlayer();
  };

  const resetGame = () => {
    setIsWinner(false);
    setWinner("");
    setIsTied(false);
    setScores({ X: 0, O: 0 });
    setGameBoard(initialBoard);
    setIsGameActive(true);
  };

  const restartGame = () => {
    setIsWinner(false);
    setWinner("");
    setIsTied(false);
    setGameBoard(initialBoard);
    setIsGameActive(true);
  };



  useEffect(() => {
    checkForWin(currentPlayer);
    checkForTie();
  }, [gameBoard]);

  const values = {
    gameBoard,
    selectSquare,
    resetGame,
    restartGame,
    winner,
    isTied,
    scores,
    currentPlayer,
  };
  return <MainContext.Provider value={values}>{children}</MainContext.Provider>;
};

const useGame = () => {
  const context = useContext(MainContext);

  if (context === undefined) {
    throw new Error("Context not defined");
  }

  return context;
};

export default useGame;
