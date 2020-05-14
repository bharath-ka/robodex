import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    return (
        <div>
            {
                robots.map(item => (<Card key={item.id} name={item.name} email={item.email} id={item.id} />))
            }
        </div >
    )
}

export default CardList;
