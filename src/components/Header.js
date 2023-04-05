import useGame from "../context/MainContext";

const Header = () => {
  const {winner, scores, currentPlayer,isTied}=useGame();
  
 console.log(currentPlayer)
  return (
    <div className="header">
    <div className="title">Play Tic Tac Toe!</div>
      <div className="table">
      <div className="players" style={{ '--player': currentPlayer==="X" ? '2px solid #2b3467' : 'none'}}>
        <div className="player">X</div>
        <div className="score">
          <i className="fa fa-star"></i>{scores?.X}
        </div>
      </div>
      <div className="players" style={{ '--player': currentPlayer==="O" ? '2px solid #2b3467' : 'none'}} >
        <div className="player">O</div>
        <div className="score">
          <i className="fa fa-star"></i>{scores?.O}
        </div>
      </div>
</div> 
<div className="winner" style={{ '--winner': winner || isTied ? 'visible' : 'none'}}>
  {winner && `The winner is ${winner} `}
  {isTied &&`The game is tied`}
 </div>

    </div>
  );
};

export default Header;
