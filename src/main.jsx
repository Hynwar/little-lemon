import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter
			basename={import.meta.env.DEV ? '/' : '/react-vite-gh-pages/'}>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);
