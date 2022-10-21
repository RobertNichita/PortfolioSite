import logo from './logo.svg';
import './App.css';
import { Carousel } from './components/carousel/carouselcontainer';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navigation from './components/navigation/navbar';
import Footer from './components/footer';
import Landing from './components/landing';
import { useResizeDetector } from 'react-resize-detector';
import { Provider, useDispatch } from 'react-redux';
import store from './redux/Store/store';
import { ReactElement, useCallback } from 'react';
import { WindowSizeActions } from './redux/Slices/WindowSize';

type State = {};
type Props = {children:{}};

const RootResize = (props: Props):ReactElement<any,any> => {
	const dispatch = useDispatch();

	const onResize = useCallback(
		(width, height) => {
			console.log(`wh: ${width},${height}`);

			dispatch(WindowSizeActions.updateSize({ w: width, h: height }));
		},
		[dispatch]
	);

	const { ref, width, height } = useResizeDetector({ onResize });
	return (
		<iframe ref={ref} style={{width: '100%',height: '100vh',backgroundColor:'transparent',margin:'0px',padding:'0px',overflow:'hidden',borderWidth:'0px',position:'absolute'}}>
			{props.children}
		</iframe>
	);
};

function App() {
	return (
		<Provider store={store}>
				<Router>
					<Switch>
						<Route path="/">
							<RootResize>
							</RootResize>
							<Navigation wPercent={[100,10]} hPercent={[10,100]}/>
							<Landing />
							<Carousel floatOffsetBottom={0} wPercent={[100,88.5]} hPercent={[300,300]}/>
							<Footer />
						</Route>
					</Switch>
				</Router>
			
		</Provider>
	);
}

export default App;
