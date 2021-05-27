import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import ExerciseList from './ExerciseList.component';
import ExerciseEdit from './ExerciseEdit.component';
import ExerciseCreate from './ExerciseCreate.component';
import UserCreate from './UserCreate.component';
import NavBar from './NavBar.component';


function App() {
  return (
    <Router>
        <div className="container">
            <NavBar />
            <br/>
            <Route path="/" exact component={ExerciseList} />
            <Route path="/edit/:id" component={ExerciseEdit} />
            <Route path="/create" component={ExerciseCreate} />
            <Route path="/user" component={UserCreate} />
            
        </div>
    </Router>
  );
}

export default App;
