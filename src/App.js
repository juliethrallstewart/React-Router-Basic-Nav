import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { Route } from 'react-router-dom';

const App = () => (
	<div>
		<Navigation />
		<Route path="/" exact component={Home} />
		<Route path="about" component={About} />
		<Route path="contact" component={Contact} />
	</div>
);

export default App;
//

// * Create 3 `<Route />` setting their `path` prop equal to `/`, `/about`, `/contact` with their
// respective components.
// * Be sure to incluce the `exact` prop on the root component for `/` to make sure that it's rendering
// the exact component and not all the other components.
