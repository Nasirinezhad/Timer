import React, { Component } from "react";

class Timer extends Component
{
    constructor(props) {
        super(props)
        this.state ={
            min: this.props.detail.min,
            sec: this.props.detail.sec
        }
    }
    start = () => {
        this.props.start(this.props.d)
    }
    componentDidUpdate(prevProps) {
        if (this.props.active) {
            if (prevProps.min !== this.props.min || prevProps.sec !== this.props.sec) {
            this.setState({min: this.props.min})
            this.setState({sec: this.props.sec})
            }
            
            if(prevProps.reset !== this.props.reset)
            {
                this.setState({min: this.props.detail.min})
                this.setState({sec: this.props.detail.sec})
            }
        }
    }
    render ()
    {
        return (
            <div className={"TurnBox " + (this.props.active ? "c2":"")} onClick={this.start}>
                <div>
                    <span className="minute">{this.state.min<10 ? '0':''}{this.state.min}</span>
                    <span className="ddot">:</span>
                    <span className="second">{this.state.sec<10 ? '0':''}{this.state.sec}</span>
                </div>
                <span>{this.props.detail.label}</span>
            </div>
        );
    }
}

export default Timer;