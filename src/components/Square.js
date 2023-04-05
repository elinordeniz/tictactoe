import React from 'react'

const Square = ({char, selectSquare }) => {
  return (
    <div className='square' onClick={selectSquare}>{char}</div>
  )
}

export default Square