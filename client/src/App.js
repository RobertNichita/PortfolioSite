import logo from './logo.svg';
import './App.css';
import {Carousel} from './components/carousel/carouselcontainer.js'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Navigation from './components/navigation/navbar.js'


function App() {
  return (
    <div className="Portfolio-App">
        <Router>
        {/* <header>
            <hamburger></hamburger>
            <menubar></menubar>
        </header> */}
        <Switch>
            <Route path="/">
                <Navigation/>
                <Carousel/>
            </Route>
            {/* <Route path="/hobby">
                <HobbyPage/>
            </Route>
            <Route path="/project">
                <ProjectPage/>
            </Route>
            <Route path="/experience">
                <ExperiencePage/>
            </Route> */}
        </Switch>
        </Router>
    </div>

  );
}

export default App;
