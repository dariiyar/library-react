import React, { Component } from 'react';
import {TableRow, TableRowColumn} from 'material-ui/Table'

class  BookRow extends Component {
    
  render() {
    return (
        <TableRow {...this.props}>
            <TableRowColumn >{this.props.name}</TableRowColumn>
            <TableRowColumn>{this.props.author}</TableRowColumn>
            <TableRowColumn>{this.props.status}</TableRowColumn>
        </TableRow>
    );
  }
}

export default BookRow;