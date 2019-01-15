import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import * as actions from '../../../store/actions/index'

// Redirect user to main page upon loading this component

class Logout extends Component {

  componentDidMount() {
    this.props.onLogout()
  }

  render () {
    return <Redirect to="/"/>
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(actions.logout())
  }
}

export default connect(null, mapDispatchToProps)(Logout)