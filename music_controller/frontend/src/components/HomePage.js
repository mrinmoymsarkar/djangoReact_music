import React, { Component } from "react";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import { Routes, Route, Link, Redirect, BrowserRouter} from "react-router-dom";

export default class HomePage extends Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                This is homepage

            </div>

        );
    }
}