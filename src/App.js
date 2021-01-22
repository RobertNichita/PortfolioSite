import logo from './logo.svg';
import './App.css';
import {Carousel} from './Components/carouselcontainer.js'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import {ProjectPage} from './Components/projectspage.js'
import {ExperiencePage} from './Components/experiencepage.js'
import {HobbyPage} from './Components/hobbypage.js'

function App() {
  return (
    <div className="Portfolio-App">
        <Router>
        <Switch>
            <Route path="/">
                        {/* <header>
            <hamburger></hamburger>
            <menubar></menubar>
        </header> */}
        <Carousel/>
        {/* <footer>
            <iconbar>
                <iconbutton>

                </iconbutton>
                <iconbutton>

                </iconbutton>
                <iconbutton>

                </iconbutton>
            </iconbar>
        </footer> */}
            </Route>
            <Route path="/hobby">
                <HobbyPage/>
            </Route>
            <Route path="/project">
                <ProjectPage/>
            </Route>
            <Route path="/experience">
                <ExperiencePage/>
            </Route>
        </Switch>
        </Router>
    </div>

  );
}

export default App;
