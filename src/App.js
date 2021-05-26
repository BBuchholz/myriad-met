import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';



function App() {
  return (
    <Router>
        <div className="container">
            <Navbar />
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
