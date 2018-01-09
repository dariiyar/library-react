import React, {Component} from 'react';
import IconButton from 'material-ui/IconButton';

class SortArrowIcon extends Component {
    constructor(props){
        super(props);
        
    }
    render() {
        let sort_by = this.props.sort_by.charAt(0).toUpperCase() + this.props.sort_by.slice(1);
        let up = <span>&#8593;</span>;
        let down = <span>&#8595;</span>
        
        return (
            
            <IconButton  onClick={this.props.handleClick} iconClassName="muidocs-icon-custom-github" data-sort_by={this.props.sort_by}>
                <span style={{fontSize: 16, fontWeight: 'bold'}} >{sort_by}</span>
                <span>{ this.props.show_arrow ? this.props.up ? up : down : false} </span>
            </IconButton>)
    }
}

export default SortArrowIcon;