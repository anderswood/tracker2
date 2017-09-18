import React from 'react';

const ResetBtn = (props) => {

  const handleReset = () => {
    props.handleResetMap()
    props.handleClearState()
  }

  return (
    <div className='reset-btn' onClick={ () => handleReset() }>
      <h4>Reset Tour</h4>
    </div>
  )
}

export default ResetBtn;
