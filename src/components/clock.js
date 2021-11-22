import React, { Component } from "react";

class Clock extends Component {
    constructor(v){
        super(v)
        this.state = {
            date : new Date()
        };        
    }
    componentDidMount(){
        this.timer = setInterval(() => {
            this.asdf()
        }, 1000);
    }
    componentWillUnmount(){

    }
    asdf(){
        this.setState({
            date : new Date()
        })
    }
    render(){
        return (
            <div>
                <p>clock component</p>
                <div>{this.state.date.toLocaleTimeString()}</div>
            </div>
        );
    }

}

export { Clock } 