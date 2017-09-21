import React from 'react';

const SubmitToursBtn = () => {

  const handleSubmit = () => {
    console.log('submit!');
    //save current tour
    //clear map
    //post current tour to db
    //reset store
  }

  return(
    <div className='submit-tours-btn' onClick={ () => handleSubmit () }>
      <h4>Submit Tours to WWA</h4>
    </div>
  )

}

export default SubmitToursBtn;
