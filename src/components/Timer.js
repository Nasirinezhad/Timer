import React, { Component } from "react";

class Timer extends Component
{
    constructor(props) {
        super(props)
        this.state = {
            min: props.min,
            sec: props.sec,
            ti: setInterval(()=>{
                if(this.props.running)
                    this.props.upc ? this.countup() : this.countdown()
            }, 1000)
        }
    }
    componentDidUpdate(prevProps) {
        if (prevProps.min !== this.props.min || prevProps.sec !== this.props.sec) {
          this.setState({min: this.props.min})
          this.setState({sec: this.props.sec})
        }
        
        if(prevProps.reset !== this.props.reset)
        {
            this.setState({min: this.props.min})
            this.setState({sec: this.props.sec})
        }
    }
    countup = () => {
        if (this.state.sec === 59) {
            this.setState({min: this.state.min+1});
            this.setState({sec: 0});
        }else{
            this.setState({sec: this.state.sec+1});
        }
        this.props.evrySec(this.state.min, this.state.sec)
    }
    countdown = () => {
        if (this.state.sec === 0) {
            if (this.state.min === 0){
                this.props.finished()
                return;
            }
            this.setState({min: this.state.min-1});
            this.setState({sec: 59});
        }else{
            this.setState({sec: this.state.sec-1});
        }
        this.props.evrySec(this.state.min, this.state.sec)
    }
    start = () => {

    }
    render ()
    {
        return (
            <div className="TimerBox" >
                <span className="minute">{this.state.min<10 ? '0':''}{this.state.min}</span>
                <span className="ddot">:</span>
                <span className="second">{this.state.sec<10 ? '0':''}{this.state.sec}</span>
            </div>
        );
    }
}

export default Timer;