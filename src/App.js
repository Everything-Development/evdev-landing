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
import Cursor from './components/Cursor';
import {useState, useEffect} from 'react';

function App() {

  const [globalCoords, setGlobalCoords] = useState({x: 0, y: 0});
  useEffect(() => {
    // 👇️ get global mouse coordinates
    const handleWindowMouseMove = event => {
      console.log(event)
      setGlobalCoords({
        x: event.clientX,
        y: event.clientY,
      });
    };
    window.addEventListener('mousemove', handleWindowMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove);
    };
  }, []);


  return (
    <div className="App">
      <Router>
       <Header />
       <Cursor cursorX={globalCoords.x} cursorY={globalCoords.y}/>
        <Routes>
          <Route path="/" element={<Home/>}/>  
        </Routes>

    </Router>
    </div>
  );
}

export default App;
