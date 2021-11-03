import React from 'react';
import SignInForm from './SignInPage/SignInForm';
import StudentHomePage from './HomePage/StudentHomePage';
import TeacherHomePage from './HomePage/TeacherHomePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <SignInForm />
        </Route>
        <Route path="/studentHomepage">
          <StudentHomePage />
        </Route>
        <Route path="/teacherHomepage">
          <TeacherHomePage />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;