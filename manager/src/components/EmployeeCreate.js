import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';
import { employeeCreate, employeeFormClear } from '../actions/EmployeeActions';

class EmployeeCreate extends Component {
  componentDidMount() {
    this.props.employeeFormClear();
  }

  onButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
  }

  render() {
    // pass all props from EmployeeCreate to EmployeeForm
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Create</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(
  mapStateToProps,
  { employeeCreate, employeeFormClear }
)(EmployeeCreate);
