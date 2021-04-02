import React from 'react';
import Sun from './Components/Sun.js';
import Moon from './Components/Moon.js'
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
      som = <Sun />
    }
    else {
      som = <Moon />
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

  bodyChange() {
    if (this.state.day) {
      document.body.style.backgroundColor = "hsl(219, 44%, 78%)";
    }
    else {
      document.body.style.backgroundColor = "#282c34";
    }
  }

  render () {
    window.setTimeout(function() {
      document.getElementById('svg-div').style.visibility = 'visible';
      document.getElementById('svg-div').style.opacity = 1;
  }, 200);
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
            this.textFlip();
          }}/>
            <span className="slider"><div id="svg-div">{this.sunOrMoon()}</div></span>
          </label>
        </header>
      </div>
    );
  }
}

export default App;
