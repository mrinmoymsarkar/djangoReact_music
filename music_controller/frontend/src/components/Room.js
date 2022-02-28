import React, {Component} from "react";
 import { useParams } from 'react-router-dom';

  export function withRouter(Children){
     return(props)=>{

        const match  = {params: useParams()};
        return <Children {...props}  match = {match}/>
    }
  }

 class Room extends Component {
    constructor(props) {
        super(props);
        this.state = {
            votesToSkip : 2,
            guestCanPause: false,
            isHost: false,
        };
        this.roomCode = this.props.match.params.roomCode;

    }

    render() {
        return (
            <div>
                <h3>{this.roomCode}</h3>
        <p>Votes: {this.state.votesToSkip}</p>
        <p>Guest Can Pause: {this.state.guestCanPause}</p>
        <p>Host: {this.state.isHost}</p>
      </div>
        )
    }
}

 export default withRouter(Room);