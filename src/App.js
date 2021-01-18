import React from "react";
class TimerWrapper extends React.Component{
  constructor(props) {
    super(props)
    this.startTimer = this.startTimer.bind(this)
    this.state = {
      timeLeft: null,
      timer: null,
      stop:false,
    }

    
  }
  
  startTimer(timeLeft) {
    clearInterval(this.state.timer)
    let timer = setInterval(() => {
      
      var timeLeft = +this.state.timeLeft + 1;
      
      if (this.state.stop === true) {
        clearInterval(timer)
      }
      this.setState({
        timeLeft:timeLeft,
      })
      
    }, 1000)
    return this.setState({ timeLeft: timeLeft, timer: timer, })
    
  }


  
 




  
  render() {
    return(
    <div>
      <h2>Timer</h2>
        <div>
          <TimerDisplay timeLeft={ this.state.timeLeft}/>
          <Button time="0" startTimer={this.startTimer} />
          {/* <StopButton stopTimer={this.stopTimer}  /> */}
          

      </div>
      </div>
    )
  }
}
class Button extends React.Component {
  handleStartTimer() {
    
    return this.props.startTimer(this.props.time)
    
  }

  
  render() {
    return (
      <button onClick={this.handleStartTimer.bind(this)}>начать</button>
    )
  }
}


// class StopButton extends React.Component{
//   handleStopTimer() {
//     console.log()
//     return this.props.stopTimer()

//     //  clearInterval(this.state.timer)
//   }
//   render() {
//     return(
//       <button onClick={ this.handleStopTimer.bind(this)}>stop</button>
//     )
//   }
// }


class TimerDisplay extends React.Component {
  render() {
    return (
      <h1>время {this.props.timeLeft}</h1>
    )
  }
}
function App() {
  return(
 
      <TimerWrapper />
    
  )
}

export default App;