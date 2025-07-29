import React, { Component } from 'react';
import List from './List';

class FilteredList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      type: "All"
    };
  }

  onSearch = (event) => {
    this.setState({ search: event.target.value });
  };

  onFilterChange = (event) => {
    this.setState({ type: event.target.value });
  };

  filterItem = (item) => {
    const matchesType = this.state.type === "All" || item.type === this.state.type;
    const matchesSearch = item.name.toLowerCase().includes(this.state.search.toLowerCase());
    return matchesType && matchesSearch;
  };

  render() {
    const filteredItems = this.props.items.filter(this.filterItem);

    return (
      <div className="filter-list">
        <h3>Search Produce</h3>
        <label>Filter by Type: </label>
        <select onChange={this.onFilterChange} value={this.state.type}>
          <option value="All">All</option>
          <option value="Fruit">Fruit</option>
          <option value="Vegetable">Vegetable</option>
        </select>

        <br /><br />

        
        <input type="text" placeholder="Search" onChange={this.onSearch} />

        <List items={filteredItems} />
      </div>
    );
  }
}

export default FilteredList;
