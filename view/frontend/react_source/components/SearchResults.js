import React, { useState } from 'react';
import {useSelector} from "react-redux";
import Product from './Product/Product';
import Loading from './Loading';
import Intro from './Intro';
import Error from './Error';

const SearchResults = () => {
    const isFetching = useSelector(state => state.isFetching);
    const productSku = useSelector(state => state.productSku);
    const error = useSelector(state => state.error);

    if(!productSku.length) {
        return (<Intro/>);
    } else {
        if(isFetching) {
            return (<Loading/>);
        }
        if(error) {
            return (<Error/>);
        }
        return (<Product/>);
    }
};

export default SearchResults;
