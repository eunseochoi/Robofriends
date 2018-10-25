import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card.js';
import CardList from './CardList';
import 'tachyons';
import {robots} from './robots.js';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
	<CardList robots={robots}/>

	, document.getElementById('root'));
