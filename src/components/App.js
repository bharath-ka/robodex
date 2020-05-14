import React, { useState, useEffect } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import '../App.css'
const App = () => {
    const [robotsData, setRobotsData] = useState(null);

    const [searchField, setSearchField] = useState('');

    useEffect(() => {
        const apiRequest = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const json = await res.json()
            setRobotsData(json)
        }
        apiRequest()
    }, [])

    const onSearchChange = (e) => {
        setSearchField(e.target.value)
    }
    let filteredRobots;
    if (robotsData) {
        filteredRobots = robotsData.filter(robot => robot.name.toLowerCase().includes(searchField));
    }

    return (
        robotsData ? (
            <div className='tc'>
                <h1 className="f2">RoboFriends</h1>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
            </div>) : (<h1>LOADING.......</h1>)
    )
}

export default App;
