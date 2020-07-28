import React from 'react';
import logo from './logo.svg';
import './App.css';
import SidebarComponent from './sidebar/sidebar';
import EditorComponent from './editor/editor'; 
const firebase = require('firebase');

class App extends React.Component {
  constructor()
  {
     super();
     this.state = {
       selectedNoteIndex: null,
       selectedNote: null,
       notes: null
     }
  }
  render()
  {
    return(
      <div>
        <SidebarComponent selectedNoteIndex = {this.state.selectedNoteIndex}
        notes = {this.state.notes}
        ></SidebarComponent>
        <EditorComponent></EditorComponent>
      </div>
    );
  }

  componentDidMount = () =>
  {
    firebase
    .firestore()
    .collection('notes')
    .onSnapshot(serverUpdate => {
      const notes = serverUpdate.docs.map(_doc => {
        const data = _doc.data();
        data['id'] = _doc.id;
        return data; 
      });
      console.log(notes); 
      this.setState({notes: notes});
    }); //automatically calls the passed function whenever notes collection is updated in firebase
  }
}

export default App;
