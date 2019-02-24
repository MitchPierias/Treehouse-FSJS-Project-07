import ReactDOM from 'react-dom';
// Components
import App from './App';
// Styles
import './css/index.css';
// Service Worker
import * as serviceWorker from './serviceWorker';

ReactDOM.render(App, document.getElementById('root'));

serviceWorker.unregister();