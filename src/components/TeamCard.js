import React, { Component } from "react";
import Timer from "./Timer";
import Turn from "./Turn";

class TeamCard extends Component
{
    
    constructor(props) {
        super(props);
        this.state = {
            turn: 0,
            color: "",
            min:0,
            sec:0
        }
        this.handleClick = this.handleClick.bind(this)
    }
    
    evrySec = (min, sec)=>{
        if (min === 1 && sec === 0) {
            this.setState({color: "c4"})
        }
        this.setState({
            min: min,
            sec: sec
        })
        
    }
    finished = ()=>{
        this.setState({color: "c0"})
        this.setState({turn: this.state.turn+1})
        this.props.finished()
    }

    componentDidUpdate(prevProps) {
        if(prevProps.reset !== this.props.reset)
        {
            this.setState({color: ""})
        }
    }
    changeTurn = (i)=>{
        this.setState({turn: i});
        if(this.props.turnChange)
        this.props.turnChange(i)
        this.setState({color: ""})
    }
    handleClick = ()=>{
        if(this.props.onClick)
            this.props.onClick()
        }
    render () {
        return (
            <div className={"card " + this.state.color} onClick={this.handleClick}>
                <input className="teamName" placeholder="Team Name"/>
                <Timer
                    min={this.props.turns[this.state.turn].min}
                    sec={this.props.turns[this.state.turn].sec}
                    reset={this.props.reset}
                    running={this.props.running}
                    upc={this.props.turns[this.state.turn].upc}
                    evrySec={this.evrySec}
                    finished={this.finished}
                />
                <p className="label">
                    {this.props.turns[this.state.turn].label}
                </p>
                <div className="turns">
                    {
                        this.props.turns.map((e, i)=>{
                            return <Turn detail={e}
                                         d={i} active={this.state.turn===i}
                                         start={this.changeTurn}
                                         min={this.state.min}
                                         sec={this.state.sec}
                                         reset={this.props.reset}/>
                        })
                    }
                </div>
            </div>
        );
    }
}

export default TeamCard;