import React, { Suspense } from 'react';
import 'normalize.css';
import '@/assets/styles/index.less';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Provider store={store}>
    <HashRouter>
      <Suspense>
        <App />
      </Suspense>
    </HashRouter>
  </Provider>
);
