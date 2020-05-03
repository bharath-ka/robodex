import React, { useState } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';
import './App.css'
const App = () => {
    const [robotsData] = useState(robots);
    const [searchField, setSearchField] = useState('');
    const onSearchChange = (e) => {
        setSearchField(e.target.value)

    }
    const filteredRobots = robotsData.filter(robots => robots.name.toLowerCase().includes(searchField));
    return (
        <div className='tc'>
            <h1 className="f2">RoboFriends</h1>
            <SearchBox searchChange={onSearchChange} />
            <CardList robots={filteredRobots} />
        </div>
    )
}

export default App;
