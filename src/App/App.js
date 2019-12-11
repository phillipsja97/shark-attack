import React from 'react';
import studentData from '../helpers/data/studentsData';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  state = {
    students: [],
    livingStudents: [],
  }

  componentDidMount() {
    const students = studentData.getStudents();
    this.setState({ students });
    const livingStudents = studentData.livingStudents();
    this.setState({ livingStudents });
  }

  render() {
    return (
    <div className="App">
     <button className='btn btn-danger'>HELP ME</button>
    </div>
    );
  }
}

export default App;
