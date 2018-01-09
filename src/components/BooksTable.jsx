import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
} from 'material-ui/Table';
import BookRow from './BookRow.jsx'
import Pagination from 'material-ui-pagination';
import Divider from 'material-ui/Divider';
import SortArrowIcon from './SortArrowIcon';

class BooksTable extends Component {
  static sortedList = ['name','author'];

  constructor(props) {
    super(props);
    this.state = {
      total: 10,
      number: 3,
      display: 5,
      sort_by: {
        name: {
          title: 'name',
          up: false,
          active: true
        },
        author: {
          title: 'author',
          up: false,
          active: false
        }
      }
    }

  }

  handlePagination = (number) => {
    alert(number);
  }

  handleSortClick = (event) => {
    event.preventDefault();
    let th_element = event.target.closest("th");
    let sort = th_element.dataset.sort_by;
    let up = !this.state.sort_by[sort].up;
    let sort_by = {...this.state.sort_by}
    sort_by = this.disableSortActive(sort, sort_by);
    sort_by[sort] = {up: up, active: true, title: sort };
    this.setState({sort_by: sort_by});
  }

  disableSortActive = (name,sort_by) => {
    const sorted_list = Object.values(BooksTable.sortedList)
    sorted_list.map(name =>{
      sort_by[name].active = false;
    })
    return sort_by;
  }

  headerClick=(event)=>{
    alert('Header')
  }
  render() {
    const tableData = [
      {
        id: 1,
        name: 'Srping',
        author: 'John Smith',
        status: 'In'
      },
      {
        id: 2,
        name: 'Big Brother',
        author: 'George Orwell',
        status: 'Out'
      },
      {
        id: 3,
        name: 'The Sun',
        author: 'Mat Donovan',
        status: 'In'
      },
      {
        name: 'Once in America',
        author: 'Jessica Rondie',
        status: 'In'
      }
    ]

    const BooksComponents = tableData.map(BookObject => {
      return (
        <BookRow {...BookObject} {...this.props} />
      );
    });

    const SortedHeaders = BooksTable.sortedList.map((title,index) => {
      let style;
      return(
        <TableHeaderColumn data-sort_by={title}>
                <SortArrowIcon handleClick={this.handleSortClick} up={this.state.sort_by[title].up} show_arrow={this.state.sort_by[title].active} sort_by={this.state.sort_by[title].title} />
              </TableHeaderColumn>
      );
    });

    return (
      <div className="library_table">
        <Table {...this.props} onCellClick={this.handleCellHeaderClick}>
          <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
            <TableRow>
              {SortedHeaders}
              <TableHeaderColumn>
                <span style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}>Status</span>
              </TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody showRowHover={true}>
            {BooksComponents}
          </TableBody>
        </Table>
        <Divider />
        <Pagination total={this.state.total}
          current={this.state.number}
          display={this.state.display}
          onChange={this.handlePagination}
        />
      </div>
    );
  }
}

export default BooksTable;