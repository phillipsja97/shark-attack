import React from 'react';
import PropTypes from 'prop-types';
import studentData from '../../helpers/data/studentsData';
import studentShape from '../../helpers/propz/studentShape';
import './LiveStudent.scss';

class LiveStudent extends React.Component {
  static propTypes = {
    liveStudents: studentShape.studentShape,
  }

  render() {
    const { student } = this.props;
    return (
      <React.Fragment>
      <div class="cardFish">
      <div class="card-body">
          <h5 class="card-title">{student.firstName} {student.lastName}</h5>
      </div>
      </div>
      </React.Fragment>
    );
  }
}

export default LiveStudent;
