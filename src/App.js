import React, { Component } from 'react';
import {ContactsList} from './ContactsList';
import './App.css';

import { connect } from "react-redux";
import { contactsFetched } from "./actions";
class App extends Component {
  state = {
    contacts: [],
  };
  componentDidMount = () => {
    fetch("https://randomuser.me/api/?format=json&results=10")
      .then(res => res.json())
      .then(json => this.props.contactsFetched(json.results ));
   }
  render() {
    return (
      <ContactsList contacts={this.props.contacts} />
     );
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts // (1)
  }
};
const mapDispatchToProps = { contactsFetched }; // (2)

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App); // (3)