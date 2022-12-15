import React, { Component } from 'react';
import CardLists from '../components/CardLists';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
/*Idea
To make it interactive
1) define a variable for the app called state 
   which, by the name, defines it state
2) let's define the state by properties- robots array and searchInput
3) Now we can change the state of the App by changing the 
   robots array, by filtering the array according to searchInput
4) For this, first we need to pass the info of the SearchBox to the App
   Steps for this-
   i) Make function that takes the event as input(change in searchbox)
      and update the state of the app
   ii) Pass this function to the SearchBox named searchChange
   iii) In input tag in SearchBox, put attribute onClick equal to searchChange
5) Then we will declare a filterRobots array which will contain the robots
   having name same as the searchInput
6) At last, we will pass the filterRobots array to Cardlist to make cards for
   instead of whole robots array*/


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchInput : ''
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots : users}));
    }
    onSearchChange = (event) => {
        this.setState({ searchInput: event.target.value });
        // console.log(this.state.searchInput);
    }
    render() {
        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchInput.toLowerCase());
        });
        if(this.state.robots.length === 0) {
            return <h1 className='tc'>Loading...</h1>
        }
        else {
            return (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange ={this.onSearchChange}/>
                    <Scroll>
                        <CardLists robots={filteredRobots}/>
                    </Scroll>
                </div>
            );
        }
    }
};

export default App;