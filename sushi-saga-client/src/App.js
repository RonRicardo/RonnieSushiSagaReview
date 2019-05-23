import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    allSushi: [],
    sushiIndex: 0,
    budget: 125
  }

  componentDidMount(){
    fetch(API)
     .then(resp => resp.json())
     .then(this.fetchSushi)
  }

  fetchSushi = (data) => {
    this.setState({
      allSushi: data
    })
    this.addEatenBoolean()
  }

  addEatenBoolean = () => {
    this.setState((state) => {
      state.allSushi.map(sushi => sushi.eaten = false)
    })
  }

  sushiSlicer = () => {
    // determine which sushi get passed into sushiContainer
    const sushiIndex = this.state.sushiIndex
    return this.state.allSushi.slice(sushiIndex, sushiIndex + 4)
  }

  moreSushi = () => {
    //update state to increase sushiIndex
    this.setState({
      sushiIndex: this.state.sushiIndex + 4
    })
  }

  eatSushi = (eatenSushi) => {
    // find the current sushi in allSushi
    // find & update eaten property
    // change false to true
    // build a new array for allSushi including my updated sushi
    let updatedSushi = this.state.allSushi.map(stateSushi => {
      if (stateSushi.id === eatenSushi.id && stateSushi.price < this.state.budget){
        stateSushi.eaten = true
        this.updateBudget(stateSushi)
        return stateSushi
      } else {
        return stateSushi
      }
    })
    this.setState({
      allSushi: updatedSushi
    })
  }

  updateBudget = (stateSushi) => {
    let currentBudget = this.state.budget
      currentBudget -= stateSushi.price
      this.setState({
        budget: currentBudget
      })
  }

  render() {
    let filteredSushi = this.state.allSushi.filter(sushi => {
      return sushi.eaten === true
    })
    return (
      <div className="app">
        <SushiContainer currentSushi={this.sushiSlicer()} moreSushi={this.moreSushi} eatSushi={this.eatSushi}/>
        <Table filteredSushi={filteredSushi} budget={this.state.budget} updateBudget={this.updateBudget}/>
      </div>
    );
  }
}

export default App;
