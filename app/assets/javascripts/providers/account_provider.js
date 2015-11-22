import React, { Component } from 'react'
import { Provider } from 'react-redux'
import AccountContainer from '../containers/account_container'
import store from '../stores'

class AccountProvider extends Component {
  render() {
    return (
      <Provider store={store}>
        <AccountContainer />
      </Provider>
    )
  }
}

export default AccountProvider
