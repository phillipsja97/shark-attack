import React from 'react';
import PropTypes from 'prop-types';
import studentShape from '../../helpers/propz/studentShape';
import Gravestone from '../Gravestone/Gravestone';

class GraveYard extends React.Component {
  static propTypes = {
    deadStudents: PropTypes.arrayOf(studentShape.studentShape),
  }

  render() {
    const dedStudents = this.props.deadStudents;
    const deadStudentCard = dedStudents.map((student) => <Gravestone key={student.id} student={student} />);
    return (
      <div className="d-flex flex-wrap justify-content-between">
        {deadStudentCard}
      </div>
    );
  }
}

export default GraveYard;
