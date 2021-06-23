import React, { useState } from 'react';
import {useSelector} from "react-redux";

const Loading = () => {
    const productSku = useSelector(state => state.productSku);

    return (
      <div>
          <h2>We dont have product with such SKU:#{productSku} </h2>
          <small>Please try SKU "WJ01" to see result</small>
      </div>
    );
};

export default Loading;
