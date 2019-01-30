import React from 'react';

class Players extends React.Component{

    state = {
        players:[
            {
                id:1,
                name:"Pedro Martinez"
            }
        ],
        selected:""
    }

    selectPlayer = player => {
        this.setState({selected:player.name})
    }
    render(){
        return( 
        <>  
            <div data-testid="selected-player">{this.state.selected}</div>

                {this.state.players.map(p => (
                    <div key={p.id} className="player">
                        <div data-testid="title">{p.id}</div>
                        <div>{p.name}</div>
                        <button 
                            onClick={
                                () => this.selectPlayer(p)
                            }>
                            Select
                        </button>
                    </div>
                ))
            }
        </>
        );
    }
}

export default Players;