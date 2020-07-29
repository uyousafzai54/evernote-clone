import React from 'react';
import ReactQuill from 'react-quill';
import debounce from '../helper';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem'; 
import styles from './styles';
import { Divider, Button, List} from '@material-ui/core';
import SidebaritemComponent from '../sidebaritem/sidebaritem';

class SidebarComponent extends React.Component {
    constructor()
    {
        super();
        this.state = {
            addingNote: false,
            title: null
        }

    }
    render() {
        const {notes, classes, selectedNoteIndex} = this.props;
        if(notes)
        {
            return(
                <div className = {classes.sidebarContainer}>
                        <Button
                        onClick = {this.newNoteBtnClick}
                        className = {classes.newNoteBtn}>{this.state.addingNote? 'Cancel': 'New Note'}</Button>
                        {
                            this.state.addingNote ? 
                            <div>
                                <input type = 'text'
                                className = {classes.newNoteInput}
                                placeholder = 'Enter note title'
                                onKeyUp = {(e) => this.updateTitle(e.target.value)}>
                                </input>
                                <Button className = {classes.newNoteSubmitBtn}
                                onClick = {this.newNote}
                                >Submit Note</Button>
                            </div>:
    
                            null
                        }
                        <List>
                            {
                                notes.map((_note, _index) => {
                                    return(
                                        <div key = {_index}>
                                            <SidebaritemComponent
                                             _note = {_note}
                                             _index = {_index}
                                             selectedNoteIndex = {selectedNoteIndex}
                                             selectNote = {this.selectNote}
                                             deleteNote = {this.deleteNote}>
                                             </SidebaritemComponent>
                                             <Divider></Divider>
                                        </div>
                                    )
                                })
                            }
                        </List>
                    </div>
            ); 
        }
        else {
            return (<div>Add a note!</div>);        
        }
    }
    newNoteBtnClick  = () => {
        console.log('new btn clicked'); 
        this.setState({title: null, addingNote: !this.state.addingNote});    
    }
    updateTitle = (txt) => {
        console.log('Here it is: ', txt); 
        this.setState({title: txt});
    }
    newNote = () => {
        console.log(this.state);
    }
    selectNote = () => {

    }
    deleteNote = () => {

    }
}
export default withStyles(styles)(SidebarComponent);