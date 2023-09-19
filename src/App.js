import React, { Component } from 'react';
import {Route, Routes} from 'react-router-dom';
import {Content, Theme} from '@carbon/react';
import TutorialHeader from './components/TutorialHeader';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';
import './app.scss';

class App extends Component {
	render() {
		return (
			<>
				<Theme theme="g100">
					<TutorialHeader/>
				</Theme>
				<Content>
					<Routes>
						<Route exact path="/" element={<LandingPage/>}/>
						<Route path="/repos" element={<RepoPage/>}/>
					</Routes>
				</Content>
			</>
		);
	}
}

export default App;
