import React from 'react';

import axios from 'axios';

export default class ListPerson extends React.Component {
  state = {
    Usuarios: []
  }

  componentDidMount() {
    axios.get(`http://localhost:9000/users/all`)
      .then(res => {
        const Usuarios = res.data;
        this.setState({ Usuarios });
      })
  }

  render() {
    return (
      <ul>
        { this.state.Usuarios.map(person => <li> {person._id} </li>)}
      </ul>
    )
  }
}