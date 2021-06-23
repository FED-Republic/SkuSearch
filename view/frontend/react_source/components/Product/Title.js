import React, { useState } from 'react';

const Title = (props) => {
    return (
        <div className="page-title-wrapper product">
            <h1 className="page-title">
                <span className="base">
                    {props.name}
                </span>
            </h1>
        </div>
    );
};

export default Title;
