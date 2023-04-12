import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import MainView from './components/main/index';
import Header from "./components/commom/header/index"
import Footer from "./components/commom/footer/index"

import Information from "./components/information/index"
import Introduction from "./components/introduction/index"
import PracticeRoom from "./components/practiceRoom/index"
import Media from "./components/media/index"
import SheetMusic from "./components/sheetmusic/index"
import Teacher from "./components/teacher/index"
import Community from "./components/community/index"

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="modal-container"></div>
        <div className="container">
          <Routes>
            <Route path="/"  element = {<MainView />}/>
            <Route path="/introduction"  element = {<Introduction />}/>
            <Route path="/information"  element = {<Information />}/>
            <Route path="/practiceRoom"  element = {<PracticeRoom />}/>
            <Route path="/media"  element = {<Media />}/>
            <Route path="/sheetmusic"  element = {<SheetMusic />}/>
            <Route path="/teacher"  element = {<Teacher />}/>
            <Route path="/community"  element = {<Community />}/>
          </Routes>
        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
