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
import Footer from "./components/footer.js"
import Landing from "./components/landing.js"


function App() {
  return (
    <div className="Portfolio-App">
        <Router>
            <Switch>
                <Route path="/">
                    <Navigation/> 
                    <Landing/>
                    <Carousel/>
                    <Footer/>
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
