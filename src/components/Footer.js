
import useGame from "../context/MainContext"

const Footer = () => {
    const {resetGame, restartGame}=useGame();
  return (
    <div className='Footer'>
        {/* <div className="winner">The game is Over!</div> */}
        <button onClick={resetGame} className='reset'>
    Reset
        </button>
        <button onClick={restartGame} className='restart'>
Restart
        </button>
    </div>
  )
}

export default Footer