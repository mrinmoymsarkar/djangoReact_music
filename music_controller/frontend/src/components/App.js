import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from "./HomePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";



export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
                    <Route path = '/join' element = {<RoomJoinPage/>} />
                    <Route path = '/create' element = {<CreateRoomPage/>} />

                </Routes>
</BrowserRouter>

      </div>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
