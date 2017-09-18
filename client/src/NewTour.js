import React, { Component } from 'react';

import ResetBtn from './ResetBtn';
import SaveTourBtnContainer from './containers/SaveTourBtnContainer';

class NewTour extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      lastVisited: '',
      agency: '',
      description: ''
    }
  }

  updateOnChange (e, title) {
    this.setState({[title]: e.target.value})
  }

  clearState () {
    this.setState({
      name: '',
      lastVisited: '',
      agency: '',
      description: ''
    })
  }

  render () {
    return (
      <section className='new-tour-container'>
        <h2>New Tour</h2>
        <ResetBtn handleClearState={ this.clearState.bind(this) }
                  handleResetMap={ this.props.handleResetMap }/>
        <SaveTourBtnContainer handleClearState={ this.clearState.bind(this) }
                              handleResetMap={ this.props.handleResetMap }
                              tourInfo={ this.state }/>
        <form className='tour-form'>
          <section className='tour-name-section'>
            <label htmlFor='tour-name'><h3>Tour Name:</h3></label>
            <input  className='tour-name'
              placeholder='Tour Name'
              value={ this.state.name }
              onChange={ e => this.updateOnChange(e, 'name') }/>
            </section>
            <section className='last-visited-section'>
              <label htmlFor='last-visited'><h3>Last Visited:</h3></label>
              <input  className='last-visited'
                placeholder='Last Visited'
                value={ this.state.lastVisited }
                onChange={ e => this.updateOnChange(e, 'lastVisited') }/>
              </section>
              <section className='land-agency-section'>
                <label htmlFor='land-agency'><h3>Land Agency:</h3></label>
                <input  className='land-agency'
                  placeholder='Land Agency'
                  value={ this.state.agency }
                  onChange={ e => this.updateOnChange(e, 'agency') }/>
                </section>
                <section className='description-section'>
                  <label htmlFor='description'><h3>Description:</h3></label>
                  <textarea  className='description'
                    placeholder='Description'
                    value={ this.state.description }
                    onChange={ e => this.updateOnChange(e, 'description') }>
                  </textarea>
                </section>
              </form>
      </section>
    )
  }
}

export default NewTour;
