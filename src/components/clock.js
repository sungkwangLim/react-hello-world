import React, { Component } from "react";
const myArray = ['apple', 'banana', 'orange'];

const myList = myArray.map((item) => <p>{item}</p>)
class Clock extends Component {
    constructor(props){
        super(props)
        this.state = {
            date : new Date(),
            num : this.props.value2.asdf
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
    onClickHander(msg){
        console.log(msg);
        return()=>{
            console.log("리턴값이 전달된다.");
        }
    }
    render(){
        return (
            <div>
                <p>clock component</p>
                <div>{this.state.date.toLocaleTimeString()}</div>
                <div>{this.state.num}</div>
                <button onClick={this.clickEvt}>num+</button>
                <button onClick={()=>this.onClickHander('bb')}>bb</button>
                {myList}
            </div>
        );
    }
}

export { Clock } 