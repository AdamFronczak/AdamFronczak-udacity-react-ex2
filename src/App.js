import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/*
Display a list of movies where each movie contains a list of users that favorited it.

For detailed instructions, refer to instructions.md.
*/

const profiles = [
  {
    id: 1,
    userID: '1',
    favoriteMovieID: '1',
  },
  {
    id: 2,
    userID: '2',
    favoriteMovieID: '1',
  },
  {
    id: 3,
    userID: '4',
    favoriteMovieID: '5',
  },
  {
    id: 4,
    userID: '5',
    favoriteMovieID: '2',
  },
  {
    id: 5,
    userID: '3',
    favoriteMovieID: '5',
  },
  {
    id: 6,
    userID: '6',
    favoriteMovieID: '4',
  },
];

const users = {
  1: {
    id: 1,
    name: 'Jane Jones',
    userName: 'coder',
  },
  2: {
    id: 2,
    name: 'Matthew Johnson',
    userName: 'mpage',
  },
  3: {
    id: 3,
    name: 'Autumn Green',
    userName: 'user123',
  },
  4: {
    id: 3,
    name: 'John Doe',
    userName: 'user123',
  },
  5: {
    id: 5,
    name: 'Lauren Carlson',
    userName: 'user123',
  },
  6: {
    id: 6,
    name: 'Nicholas Lain',
    userName: 'user123',
  },
};

const movies = {
  1: {
    id: 1,
    name: 'Planet Earth',
  },
  2: {
    id: 2,
    name: 'Selma',
  },
  3: {
    id: 3,
    name: 'Million Dollar Baby',
  },
  4: {
    id: 4,
    name: 'Forrest Gump',
  },
  5: {
    id: 5,
    name: 'Get Out',
  },
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>How Popular is Your Favorite Movie?</h2>
		<Populairty />
      </div>
    );
  }
}

class Populairty extends Component {
  render() {
    var moviesWithLikes = Object.values(movies).map(m => ({
      movieName: m.name,
      likedBy: Object.values(profiles)
      	.filter(p => p.favoriteMovieID == m.id)
      	.map(p => users[p.userID].name)
    }));
               
    return (
      <div>
      { moviesWithLikes.map(x =>
          <React.Fragment>
            <MovieName name={x.movieName} />
            <LikedBy names={x.likedBy} />
          </React.Fragment>
      	)};
      </div>
    );
  }
}

class MovieName extends Component {
  render() {
    return (
      <h2>{this.props.name}</h2>
    );
  }
}

class LikedBy extends Component {
  render() {
    return (
      <ul>
      { this.props.names.length == 0 
     	? <p>None of the current users liked this movie</p>
      	: this.props.names.map((x, i) => <li key={i}>{x}</li>)
      }
      </ul>
    );
  }
}

export default App;
