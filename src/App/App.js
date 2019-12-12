import React from 'react';
import studentData from '../helpers/data/studentsData';
import SharkTank from '../components/Shark-Tank/SharkTank';
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

  render() {
    return (
    <div className="App">
     <SharkTank liveStudents={this.state.liveStudents} />
    </div>
    );
  }
}

export default App;
