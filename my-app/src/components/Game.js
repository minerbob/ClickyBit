import React, { Component } from "react";
import Card from "./Card";
import Wrapper from "./Wrapper";
import friends from "../friends.json";
let chosen = [];
let high = 0;
let score = 0;

class Game extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };



  click = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    let friends = this.state.friends;
    let contains = [];
    contains = chosen.includes(id) ? true : false;
    chosen.push(id);
    console.log(contains);
    friends.sort(() => 0.5 - Math.random());
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
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
    );
  }
}

export default Game;

