import React, { Component } from "react";
import TeamCard from "./TeamCard";

class Main extends Component
{
    state = {
        turn: 1,
        running: false,
        reset1: 0,
        reset2: 0,
        turns: [
            {
                min: 6,
                sec: 0,
                label: "طرح مساله"
            },
            {
                min: 3,
                sec: 0,
                label: "دفاع اول"
            },
            {
                min: 3,
                sec: 0,
                label: "دفاع دوم"
            },
            {
                min: 4,
                sec: 0,
                label: "نتیجه گیری"
            }
        ]
    }
    start = () =>{
        this.setState({running: !this.state.running})
    }
    reset = () =>{
        this.setState({running: false})
        if(this.state.turn===1)
            this.setState({reset1: this.state.reset1+1})
        else
            this.setState({reset2: this.state.reset2+1})
    }
    togle = () =>{
        this.setState({running: false})
        this.setState({turn: (this.state.turn===1 ? 2 :1)})
    }

    render ()
    {
        return (
            <div className="main">
                <TeamCard 
                    turns={this.state.turns}
                    reset={this.state.reset1}
                    running={this.state.running&(this.state.turn===1)}
                    finished={this.togle}
                    onClick={()=>this.setState({turn: 1})}
                    />
                <div className="mid">
                    <button className="reset" onClick={this.togle}>{this.state.turn===2 ? "<<" : ">>"}</button>
                    <button className="start" onClick={this.start}>{this.state.running ? "Stop" : "Start"}</button>
                    <button className="reset" onClick={this.reset}>Reset</button>
                </div>
                <TeamCard 
                    turns={this.state.turns}
                    reset={this.state.reset2}
                    running={this.state.running&(this.state.turn===2)}
                    finished={this.togle}
                    onClick={()=>this.setState({turn: 2})}
                    />
            </div>
        );
    }
}

export default Main;