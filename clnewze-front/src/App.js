import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import AppComponent from './components/AppComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="modal-container"></div>
        <div className="container">
          <Routes>
            <Route path="/"  element = {AppComponent}/>
            {/* <Route path="/introduction"  component = {IntroductionComponent}/>
            <Route path="/career"  component = {CareerComponent}/>
            <Route path="/project"  component = {ProjectComponent}/>
            <Route path="/together"  component = {TogetherComponent}/> */}
          </Routes>
        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
