import React, { useState } from 'react';

const Loading = () => {
    return (
      <div>
          <h2>Please enter product SKU number</h2>
          <small>
              Magento Sample data has product SKU "WJ01" and "24-MB01".<br/>
              Try them to see result.<br/>
              <br/>
              Pay attention! Some of configurable products doesnt have price in Rest response.<br/>
              Check simple one.
          </small>
      </div>
    );
};

export default Loading;
