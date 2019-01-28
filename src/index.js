import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from "react-router-dom";
import './index.css';
import * as serviceWorker from './serviceWorker';
import RouterPage from './router/routerPage'

ReactDOM.render(
    <BrowserRouter>
        <RouterPage/>
    </BrowserRouter>,
    document.getElementById('root')
);
serviceWorker.unregister();
