import React from 'react';
import './App.css';
import collegeBasketballTeams from './CollegeBasketballTeams.json';

interface Team {
  school: string;
  name: string;
  city: string;
  state: string;
}

const schoolNames = ['CV', 'UHigh', 'NC'];

function Welcome() {
  return <h1>NCAA Basketball March Madness</h1>;
}

class School extends React.Component<Team> {
  render() {
    const oneSchool = this.props;

    return (
      <div>
        <h2>School Name: {oneSchool.school} </h2>
        <h2>Mascot: {oneSchool.name}</h2>
        <h2>City: {oneSchool.city}</h2>
        <h2>State: {oneSchool.state} </h2>
      </div>
    );
  }
}

//build a function
function SchoolList() {
  return (
    <div>
      {collegeBasketballTeams.teams.map((team: Team) => (
        <School key={team.school} {...team} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <SchoolList />
    </div>
  );
}

export default App;
