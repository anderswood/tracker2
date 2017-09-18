import React from 'react';

const SaveTourBtn = (props) => {

  const handleSave = () => {
    console.log(props);
    props.handleSaveTour(props.tourInfo)
    props.handleResetMap()
    props.handleClearState()
  }

  return (
    <div className='save-tour-btn' onClick={ () => handleSave() }>
      <h4>Save Tour</h4>
    </div>
  )
}

export default SaveTourBtn;
