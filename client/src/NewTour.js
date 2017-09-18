import React, { Component } from 'react';

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

  render () {
    return (
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
                      onChange={ e => this.updateOnChange(e, 'lastVisted') }/>
        </section>
        <section className='land-agency-section'>
          <label htmlFor='land-agency'><h3>Land Agency:</h3></label>
          <input  className='land-agency'
                      placeholder='Land Agency'
                      value={ this.state.agency }
                      onChange={ e => this.updateOnChange(e, 'agency') }/>
        </section>
        <section className='description-section'>
          <label htmlFor='description'><h3>Land Agency:</h3></label>
          <input  className='description'
                      placeholder='Description'
                      value={ this.state.description }
                      onChange={ e => this.updateOnChange(e, 'description') }/>
        </section>
      </form>


    )
  }
}

export default NewTour;
