import React from 'react';
import PropTypes from 'prop-types';
import studentData from '../../helpers/data/studentsData';
import studentShape from '../../helpers/propz/studentShape';
import LiveStudent from '../LiveStudent/LiveStudent';

class SharkTank extends React.Component {
  static propTypes = {
    liveStudents: PropTypes.arrayOf(studentShape.studentShape),
  }

  render() {
    const livingStudents = this.props.liveStudents;
    console.log(livingStudents);
    const studentCard = livingStudents.map((student) => <LiveStudent key={student.id} student={student} />);
    return (
      <div className="SharkTank">
      {studentCard}
      </div>
    );
  }
}

export default SharkTank;
