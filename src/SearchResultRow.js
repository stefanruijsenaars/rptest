import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import {
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

/** Component for a row with a single search results in it */
class SearchResultRow extends PureComponent {


  render() {
    let i = 1;
    return (
      <TableRow>
        <TableRowColumn>{this.props.name}</TableRowColumn>
        <TableRowColumn>{this.props.company}</TableRowColumn>
        <TableRowColumn>{this.props.email}</TableRowColumn>
        <TableRowColumn>{this.props.city}</TableRowColumn>
        <TableRowColumn>{this.props.country}</TableRowColumn>
        <TableRowColumn>
          {!(this.props.jobHistory.length == 1 && this.props.jobHistory[0] === "") && (
            <ul>
              {this.props.jobHistory.map((item) =>
                <li key={i++}>{item}</li>
              )}
            </ul>
          )}
        </TableRowColumn>
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
  jobHistory: PropTypes.arrayOf(PropTypes.string),
};
export default SearchResultRow;
