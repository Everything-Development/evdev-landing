import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home'


function App() {
  return (
    <div className="App">
      <Router>
       <Header />
       
        <Routes>
          <Route path="/" element={<Home/>}/>  
        </Routes>

    </Router>
    </div>
  );
}

export default App;
