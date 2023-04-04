import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import MainView from './components/main/index';
import Header from "./components/commom/header/index"

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="modal-container"></div>
        <div className="container">
          <Routes>
            <Route path="/"  element = {<MainView />}/>
            {/* <Route path="/introduction"  component = {IntroductionComponent}/>
            <Route path="/career"  component = {CareerComponent}/>
            <Route path="/project"  component = {ProjectComponent}/>
            <Route path="/together"  component = {TogetherComponent}/> */}
          </Routes>
        </div>

        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
