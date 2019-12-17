import React from 'react';
import studentShape from '../../helpers/propz/studentShape';
import './Gravestone.scss';

class Gravestone extends React.Component {
  static propTypes = {
    DeadStudents: studentShape.studentShape,
  }

  render() {
    const { student } = this.props;
    return (
      <React.Fragment>
      <div class="cardDeadFish">
      <div class="card-body">
          <h5 class="card-title">{student.firstName} {student.lastName}</h5>
      </div>
      </div>
      </React.Fragment>
    );
  }
}

export default Gravestone;
