import React from 'react';
import ReactQuill from 'react-quill';
import debounce from '../helper';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem'; 
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import { removeHTMLTags } from '../helper'; 
import styles from './styles';
import { Divider, Button} from '@material-ui/core';

class SidebaritemComponent extends React.Component {
    constructor()
    {
        super();

    }
    render(){
        const{_index, _note, classes, selectedNoteIndex} = this.props;
        return(
            <div key = {_index}>
                <ListItem
                    className = {classes.ListItem}
                    selected = {selectedNoteIndex === _index}
                    alignItems  = 'flex start'>
                    <div 
                        className = {classes.textSelection}
                        onClick = {() => this.selectNote(_note, _index)}>
                        <ListItemText
                            primary = {_note.title}
                            secondary = {removeHTMLTags(_note.body.substring(0, 30))+'...'}
                            >
                        </ListItemText>
                    </div>
                    <DeleteIcon
                        onClick = {() => this.deleteNote(_note)}
                        className = {classes.deleteIcon}
                        >

                    </DeleteIcon>
                </ListItem>
            </div>
        );
    }
}
export default withStyles(styles)(SidebaritemComponent);