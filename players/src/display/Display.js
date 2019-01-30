import React from 'react';
import Dashboard from "../dashboard/Dashboard"

class Display extends React.Component{

    state = {
        balls:0,
        strikes:0
    }

    strikeEvent = event => {
        if(this.state.strikes + 1 === 3){
            this.setState({
                strikes:0,
                balls:0,
            })
        }else{
            this.setState({
                strikes:this.state.strikes + 1
            })
        }
    }
    ballEvent = event => {
        if(this.state.balls + 1 === 4){
            this.setState({
                strikes:0,
                balls:0,
            })
        }else{
            this.setState({
                balls:this.state.balls + 1
            })
        }
    }
    foulEvent = event => {
        this.setState({
        })
    }
    hitEvent = event => {
        this.setState({
            strikes:0,
            balls:0,
        })
    }
    render(){
        return( 
        <>  
                <div data-testid="strikes">Strikes: {this.state.strikes}</div>
                <div data-testid="balls">Balls: {this.state.balls}</div>
                <Dashboard 
                    strike={this.strikeEvent}
                    ball={this.ballEvent}
                    foul={this.foulEvent}
                    hit={this.hitEvent}
                />
        </>
        );
    }
}

export default Display;