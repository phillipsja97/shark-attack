import React from 'react';
import studentData from '../helpers/data/studentsData';
import SharkTank from '../components/Shark-Tank/SharkTank';
import GraveYard from '../components/Graveyard/Graveyard';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  state = {
    students: [],
    liveStudents: [],
    deadStudents: [],
  }

  componentDidMount() {
    const students = studentData.getStudents();
    this.setState({ students });
    const liveStudents = studentData.livingStudents();
    this.setState({ liveStudents });
    const deadStudents = studentData.theDeadStudents();
    this.setState({ deadStudents });
  }

  sharkAttack = () => {
    let livingStudents = studentData.livingStudents();
    const randStudent = livingStudents[Math.floor(Math.random() * livingStudents.length)];
    const randStudentId = randStudent.id;
    studentData.followTheLight(randStudentId);
    const deadStudents = studentData.theDeadStudents();
    livingStudents = studentData.livingStudents();
    this.setState({ deadStudents, livingStudents });
  }


  render() {
    return (
      <div className="App">
      <div className="d-flex">
        <div className="col-6">
          <h1 className="text-center">Shark Tank</h1>
          <SharkTank liveStudents={this.state.liveStudents} sharkAttack={this.sharkAttack} />
        </div>
        <div className="col-6">
          <h1 className="text-center">Grave Yard</h1>
          <GraveYard deadStudents={this.state.deadStudents} />
        </div>
      </div>
    </div>
    );
  }
}

export default App;
