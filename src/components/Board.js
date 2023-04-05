
import Square from "./Square";
import useGame from '../context/MainContext'

const Board = () => {
const {gameBoard, selectSquare}=useGame()

  return (
    <div className="board">
      <div className="row">
        <Square
          char={gameBoard[0]}
          selectSquare={() => {
            selectSquare(0);
          }}
        />
        <Square
          char={gameBoard[1]}
          selectSquare={() => {
            selectSquare(1);
          }}
        />
        <Square
          char={gameBoard[2]}
          selectSquare={() => {
            selectSquare(2);
          }}
        />
      </div>
      <div className="row">
        <Square
          char={gameBoard[3]}
          selectSquare={() => {
            selectSquare(3);
          }}
        />
        <Square
          char={gameBoard[4]}
          selectSquare={() => {
            selectSquare(4);
          }}
        />
        <Square
          char={gameBoard[5]}
          selectSquare={() => {
            selectSquare(5);
          }}
        />
      </div>
      <div className="row">
        <Square
          char={gameBoard[6]}
          selectSquare={() => {
            selectSquare(6);
          }}
        />
        <Square
          char={gameBoard[7]}
          selectSquare={() => {
            selectSquare(7);
          }}
        />
        <Square
          char={gameBoard[8]}
          selectSquare={() => {
            selectSquare(8);
          }}
        />
      </div>
    </div>
  );
};

export default Board;
