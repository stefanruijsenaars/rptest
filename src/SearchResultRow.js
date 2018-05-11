import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './SearchResultRow.css';

import {
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

/** Component for a row with a single search results in it */
class SearchResultRow extends PureComponent {

  render() {
    return (
      <TableRow>
        <TableRowColumn>{this.props.name}</TableRowColumn>
        <TableRowColumn>{this.props.company}</TableRowColumn>
        <TableRowColumn>{this.props.email}</TableRowColumn>
        <TableRowColumn>{this.props.city}</TableRowColumn>
        <TableRowColumn>{this.props.country}</TableRowColumn>
        <TableRowColumn>{this.props.jobHistory}</TableRowColumn>
      </TableRow>
    );
  }
}
SearchResultRow.propTypes = {
  name: PropTypes.string,
  company: PropTypes.string,
  email: PropTypes.string,
  city: PropTypes.string,
  country: PropTypes.string,
  jobHistory: PropTypes.string,
};
export default SearchResultRow;
