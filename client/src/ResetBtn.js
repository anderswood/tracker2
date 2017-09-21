import React from 'react';

const ResetBtn = ({handleResetMap, handleClearState}) => {

  const handleReset = () => {
    handleResetMap()
    handleClearState()
  }

  return (
    <div className='reset-btn' onClick={ () => handleReset() }>
      <h4>Reset Tour</h4>
    </div>
  )
}

export default ResetBtn;
