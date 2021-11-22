import React, { Component } from "react";

class Clock extends Component {
    constructor(props){
        super(props)
        this.state = {
            date : new Date(),
            num : this.props.value
        };        
    }
    componentDidMount(){
        this.timer = setInterval(() => {
            this.asdf()
        }, 1000);
    }
    componentWillUnmount(){
        clearInterval(this.timer);
    }
    asdf(){
        this.setState({
            date : new Date()
        })
    }
    clickEvt = () => {
        this.setState(dddd => ( {
            num : dddd.num + 1 
        }))
        console.log(this)
    }
    render(){
        return (
            <div>
                <p>clock component</p>
                <div>{this.state.date.toLocaleTimeString()}</div>
                <div>{this.state.num}</div>
                <button onClick={this.clickEvt}>num+</button>
            </div>
        );
    }
}

export { Clock } 