import React, { Component, Fragment } from 'react'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import axios from 'axios'
import ImageResults from '../Images/ImageResults';

class Search extends Component {
    state = {
        searchText: '',
        amount: 15,
        apiUrl: 'https://pixabay.com/api',
        apiKey: '11742914-e213331809ce081f5ecc01011',
        images: []
    }
    handleSearchText = (e) => {
        const val = e.target.value;
        this.setState({
            [e.target.name] : val
        }, () => {
            if(val === '') {
                this.setState({images: []})
            } else {
                axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`)
                .then(res => this.setState({
                    images: res.data.hits
                }))
                .catch(err => console.log(err));
            }
        });
    };
    handleSearchAmount = (e, index, value) => {
        this.setState({
            amount: value
        })
    }
  
  render() {
    return (
      <Fragment>
            <TextField 
                name="searchText"
                value={this.state.searchText}
                onChange={this.handleSearchText}
                floatingLabelText="Search For Images"
                fullWidth={true}
            />
        <br />
            <SelectField
            name="amount"
            floatingLabelText="Amount"
            value={this.state.amount}
            onChange={this.handleSearchAmount}
            >
            <MenuItem value={5} primaryText="5" />
            <MenuItem value={10} primaryText="10" />
            <MenuItem value={15} primaryText="15" />
            <MenuItem value={30} primaryText="30" />
            <MenuItem value={50} primaryText="50" />
            </SelectField>
        <br />
        {this.state.images.length > 0 ? (<ImageResults images={this.state.images}/>) : null}
      </Fragment>
    )
  }
}
export default Search;