import React from 'react';
import sun from './sun.svg'
import moon from './moon.svg'
import './App.css';

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      day: true
    }
    this.clickEvent = this.clickEvent.bind(this)
  }

  clickEvent() {
    this.setState(prevState => {
      if (prevState.day) {
        return {
          day: false
        }
      }
      else {
        return {
          day: true
        }
      }
    })
  }

  sunOrMoon() {
    let som
    if (this.state.day) {
      som = sun
    }
    else {
      som = moon
    }
    return som
  }

  timeOfDay() {
    let tod
    if (this.state.day) {
      tod = "It is day right now!"
    }
    else {
      tod = "It is night right now..."
    }
    return tod
  }

  flip() {
    let flip = document.getElementById("main-h1");
    
    if (this.state.day) {
      flip.classList.add("flip");
    }
    else {
      flip.classList.remove("flip");
    }
  }

  textFlip() {
    if (this.state.day) {
      document.getElementById("day").style.opacity = "0";
      document.getElementById("night").style.opacity = "1";
    }
    else {
      document.getElementById("day").style.opacity = "1";
      document.getElementById("night").style.opacity = "0";
    }
  }

  roll() {
    let roll = document.getElementById("logo");

    if (this.state.day) {
      roll.classList.remove("right")
      roll.classList.add("left")
    }
    else {
      roll.classList.remove("left")
      roll.classList.add("right")
    }
  }

  bodyChange() {
    if (this.state.day) {
      document.body.style.backgroundColor = "hsl(219, 44%, 78%)";
    }
    else {
      document.body.style.backgroundColor = "#282c34";
    }
  }

  render () {
    this.bodyChange();
    
    return (
      <div className="App">
        <header className="App-header">
          <h1 id="main-h1" className="h1-before">{this.timeOfDay()}</h1>
          <p id="day">DAY</p>
          <p id="night">NIGHT</p>
          <label className="switch">
            <input type="checkbox" onClick={() => {
            this.clickEvent()
            this.flip()
            this.roll()
            this.textFlip();
          }}/>
            <span className="slider"><img id="logo" src={this.sunOrMoon()} alt="logo" /></span>
          </label>
        </header>
      </div>
    );
  }
}

export default App;
