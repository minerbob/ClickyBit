import React, { Component } from "react";
import Card from "./Card";
import Wrapper from "./Wrapper";
import friends from "../friends.json";
import HelloHeader from './HelloHeader';
let chosen = [];
let high = 0;
let score = 0;

class Game extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score,
    high
  };

  // handleIncrement increases this.state.count by 1
  handleIncrement = (id) => {
    // We always use the setState method to update a component's state
    score++;

    if (score > high) {
      high = score;
    }

    this.setState({ score: score });
    this.setState({ high: high });
    chosen.push(id);
   };

  bust = () => {
    // We always use the setState method to update a component's state
    score = 0;
    this.setState({ score: score });
    chosen = [];
    alert("you already picked that one");
  };

  click = id => {

    // true false, is it there? 
    chosen.includes(id) ? this.bust() : this.handleIncrement(id);
    // Set this.state.friends equal to the new friends array
    let friends = this.state.friends;
    friends.sort(() => 0.5 - Math.random());
    this.setState({ friends });
  };

  // Map over this.state.friends and render a Card component for each friend object
  render() {
    return (


      <div>
        <HelloHeader 
        score = {this.state.score} 
        high = {this.state.high}
        />

        <Wrapper>
          {this.state.friends.map(friend => (
            <Card
              click={this.click}
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default Game;

