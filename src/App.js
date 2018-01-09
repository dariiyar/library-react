import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';
import Paper from 'material-ui/Paper'
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar'
import BooksTable from './components/BooksTable.jsx'
import AddBook from './components/AddBook.jsx'
import TopRatedBooks from './components/TopRatedBooks'

injectTapEventPlugin();

const paperStyle = {
  height: '85%',
  width: "85%",
  margin: '7%',
  textAlign: 'center',
  display: 'inline-block',
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      show: 'Books',
      title: 'Books'
    };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  showBooks = () => {
    this.setState({ show: 'Books', open: false, title: 'Books' });
  };

  showAddBook = () => {
    this.setState({ show: 'AddBook', open: false, title: 'Add a new Book' });
  };

  showTopRatedBooks = () => {
    this.setState({ show: 'TopRatedBooks', open: false, title: 'Top Rated Books' });
  }

  render() {
    let content = null;

    switch (this.state.show) {
      case 'Books':
        content = <BooksTable  {...this.props}/>;
        break;

      case 'AddBook':
        content = <AddBook />
        break;

      case 'TopRatedBooks':
        content = <TopRatedBooks />
        break;

      default:
        content = <h1>Make you choice!</h1>
    }
    return (
      <div className="App">

        <AppBar
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          title="Library"
          onLeftIconButtonClick={this.handleToggle}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({ open })}>

          <AppBar title="Library" onLeftIconButtonClick={this.handleToggle} />
          <MenuItem onClick={this.showBooks}>All Books</MenuItem>
          <MenuItem onClick={this.showTopRatedBooks}>Top Rated Books</MenuItem>
          <MenuItem onClick={this.showAddBook}>Add Book</MenuItem>

        </Drawer>
        <Paper style={paperStyle} zDepth={5}>

          <Toolbar style={{ justifyContent: "center" }}>
            <ToolbarTitle text={this.state.title} style={{fontSize: 24, fontWeight: 'bold'}} />
          </Toolbar>
          {content}
        </Paper>
      </div>
    );
  }
}

export default App;

