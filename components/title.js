import React from 'react';

export default function Title(props) {

 const { title, propClass } = props;

    return (
        <h2 className={`title-component ${propClass}`}>
            {title}
        </h2>
   );
}