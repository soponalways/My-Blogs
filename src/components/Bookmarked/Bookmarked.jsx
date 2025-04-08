import React from 'react';

const Bookmarked = ({card}) => {
    return (
        <div className="card w-96 bg-base-100 card-md shadow-sm mx-auto">
            <div className="card-body">
                <h2 className="card-title">{card.title}</h2>
            </div>
        </div>
    );
};

export default Bookmarked;