import React from 'react';

export default function PartnerInfo({ match }) {
    console.log(match);
    return (
        <div>
            <h1>{match.params.name}</h1>
        </div>
    )
}
