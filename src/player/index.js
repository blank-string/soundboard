import React, { Component } from 'react'
import Draggable from 'react-draggable';
import './index.css'

class Player extends Component {
    state = { position: 0}
    handleDrag (evt, data) {
        this.setState({
            position: data.x
        })
    }
    handleStop () {
        
    }
    render() {
        return <div className="player columns is-mobile">
            <div className="player-buttons column is-2 is-mobile">
                <button className="player-button button">
                    <div className="player-icon stop"></div>
                </button>
                <button className="player-button button">
                    <div className="player-icon pause"></div>
                </button>
            </div>
            <div className="column">
                <div className="player-scrub">
                    <div className="scrub-buffered"></div>
                    <div className="scrub-played" style={{width: this.state.position + 9}}></div>
                    <Draggable
                        axis="x"
                        handle=".handle"
                        bounds={{
                            left: 0,
                            right: 300 - 18
                        }}
                        position={{ x: this.state.position, y: 0 }}
                        onDrag={(evt, data) => this.handleDrag(evt, data)}
                        onStop={(evt, data) => this.handleStop(evt, data)}>
                        <div className="handle"></div>
                    </Draggable>
                </div>
            </div>
        </div>
    }
}

export default Player
