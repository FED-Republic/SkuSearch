import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useDispatch, useSelector} from "react-redux";

const SearchBar = () => {
    const productSku = useSelector(state => state.productSku);
    const [enteredText, setEnteredText] = useState('');
    const [requestUrl, setRequestUrl] = useState('');
    const dispatch = useDispatch();

    const titleChangeHandler = (event) => {
        setEnteredText(event.target.value);
    };

    useEffect(() => {
        if(enteredText==='') return;
        axios
            .get(requestUrl, {
                "Content-Type": "application/xml; charset=utf-8"
            })
            .then((repos) => {
                const allRepos = repos.data;
                console.log(repos.data.id);
                dispatch({
                    type: 'FETCH_PRODUCT_SUCCESS',
                    product: repos.data
                });
            })
            .catch(error => {
                console.log(error);
                dispatch({
                    type: 'FETCH_PRODUCT_FAILURE',
                    error: error.response
                });
            });
    }, [requestUrl]);

    const submitHandler = (event) => {
        event.preventDefault();
        if(enteredText==='' || productSku === enteredText) return;

        dispatch({
            type: 'FETCH_PRODUCT_REQUEST',
            productSku: enteredText
        });

        setRequestUrl(`https://magento24ce.test/rest/V1/products/` + enteredText);
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='sku-search__form'>
                <input type='text' onChange={titleChangeHandler}/>
                <button type='submit'>Search</button>
            </div>
        </form>
    );
};

export default SearchBar;
