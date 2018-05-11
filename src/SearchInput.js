import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

class SearchInput extends PureComponent {
  handleChange = (event) => {
    this.props.textChange(event);
  }

  render() {
    return (
      <TextField
        style={{ marginTop : '20px'}}
        hintText="Enter your search query"
        onChange={this.handleChange}
      />
    );
  }
}
SearchInput.propTypes = {
  textChange: PropTypes.func,
};
export default SearchInput;
