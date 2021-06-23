import React from 'react';
import {Provider as ReduxProvider,} from 'react-redux';

import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import store from "./store/index";

const App = () => {
    return (
        <ReduxProvider store={store}>
            <SearchBar />
            <div className='search-results__wrapper'>
                <SearchResults/>
            </div>
        </ReduxProvider>
    );
}

export default App;
