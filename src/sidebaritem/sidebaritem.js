import React from 'react';
import ReactQuill from 'react-quill';
import debounce from '../helper';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

class SidebaritemComponent extends React.Component {
    constructor()
    {
        super();

    }
    render() {
    return(<div>Hello from the sidebar item</div>);
}
}
export default withStyles(styles)(SidebaritemComponent);