import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';

import { employeesFetch } from '../actions';
import EmployeeListItem from './EmployeeListItem';

class EmployeeList extends Component {
  componentDidMount() {
    this.props.employeesFetch();
  }

  renderRow({ item }) {
    return <EmployeeListItem employee={item} />;
    // return <Text>Hey</Text>;
  }

  render() {
    console.log(this.props.employees);
    return <FlatList data={this.props.employees} renderItem={this.renderRow} />;
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => ({ ...val, uid }));
  return { employees };
};

export default connect(
  mapStateToProps,
  { employeesFetch }
)(EmployeeList);
