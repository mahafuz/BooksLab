import React, { useState } from 'react';

const Movie = ({ name, price }) => (
    <div>
        <h3>{name}</h3>
        <p>{price}</p>
    </div>
);

export default Movie;