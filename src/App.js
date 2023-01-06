import './App.scss';
import React from 'react';
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

  const projectsSectionRef = React.useRef(null)
  const clientsSectionRef = React.useRef(null)
  const reviewsSectionRef = React.useRef(null)
  const processSectionRef = React.useRef(null)
  const homeSectionRef = React.useRef(null)
  const footerSectionRef = React.useRef(null)

  const [isOpened, setIsOpened] = useState(false);

  const executeScrollToProjects = () => {
    projectsSectionRef.current.scrollIntoView() 
    setIsOpened(false);
  }
  const executeScrollToClients = () => {
    clientsSectionRef.current.scrollIntoView() 
    setIsOpened(false);
  }
  const executeScrollToReviews = () => {
    reviewsSectionRef.current.scrollIntoView() 
    setIsOpened(false);
  }
  const executeScrollToProcess = () => {
    processSectionRef.current.scrollIntoView() 
    setIsOpened(false);
  }
  const executeScrollToHome = () => {
    homeSectionRef.current.scrollIntoView() 
    setIsOpened(false);
  }
  const executeScrollToFooter = () => {
    footerSectionRef.current.scrollIntoView() 
    setIsOpened(false);
  }


  const [globalCoords, setGlobalCoords] = useState({x: 0, y: 0});
  useEffect(() => {
    // 👇️ get global mouse coordinates
    const handleWindowMouseMove = event => {
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
       <Header 
        projectsSectionRef={projectsSectionRef}
        clientsSectionRef={clientsSectionRef}
        reviewsSectionRef={reviewsSectionRef}
        processSectionRef={processSectionRef}
        homeSectionRef={homeSectionRef}
        footerSectionRef={footerSectionRef}
        executeScrollToProjects={executeScrollToProjects}
        executeScrollToClients={executeScrollToClients}
        executeScrollToReviews={executeScrollToReviews}
        executeScrollToProcess={executeScrollToProcess}
        executeScrollToHome={executeScrollToHome}
        executeScrollToFooter={executeScrollToFooter}
        isOpened={isOpened}
        setIsOpened={setIsOpened}
        />
       <Cursor cursorX={globalCoords.x} cursorY={globalCoords.y}/>
        <Routes>
          <Route path="/" element={
          <Home
            projectsSectionRef={projectsSectionRef}
            clientsSectionRef={clientsSectionRef}
            reviewsSectionRef={reviewsSectionRef}
            processSectionRef={processSectionRef}
            homeSectionRef={homeSectionRef}
            footerSectionRef={footerSectionRef}
            executeScrollToProjects={executeScrollToProjects}
            executeScrollToClients={executeScrollToClients}
            executeScrollToReviews={executeScrollToReviews}
            executeScrollToProcess={executeScrollToProcess}
          />
          }/>  
        </Routes>

    </Router>
    </div>
  );
}

export default App;
