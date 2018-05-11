import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import SearchResultRow from './SearchResultRow';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
} from 'material-ui/Table';

/** Table with search results in it */
class SearchResults extends PureComponent {

  render() {
    // Assumption: it's OK to just show a comma separated list of jobs. Suggested improvement: turn it into a bulleted list so it can be styled and displayed right to left if necessary.
    let num = 1;
    return (
      <Table
        selectable={false}
        style={{
          width: '90%',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: '20px',
        }}>
        <TableHeader displaySelectAll={false}>
          <TableRow>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Company</TableHeaderColumn>
            <TableHeaderColumn>Email</TableHeaderColumn>
            <TableHeaderColumn>City</TableHeaderColumn>
            <TableHeaderColumn>Country</TableHeaderColumn>
            <TableHeaderColumn>Job History</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
        {this.props.searchData.map((searchData) =>
              <SearchResultRow
                key={num++}
                name={searchData.name}
                company={searchData.company}
                email={searchData.email}
                city={searchData.city}
                country={searchData.country}
                jobHistory={searchData.job_history}
              />
        )}
        </TableBody>
      </Table>
    );
  }
}
SearchResults.propTypes = {
  searchData: PropTypes.array,
};
export default SearchResults;
