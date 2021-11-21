import React from 'react';
import '../css/class.css';

class Function extends React.Component{


    constructor(props){
super(props);
this.state={no:this.props.no}
    }
increase=()=>{
    this.setState({no:this.state.no+1})
}
reset=()=>{
    this.setState({no:0})
}
decrease=()=>{
    this.setState({no:this.state.no-1})
}

    render(){
        return( <div >
            <div className="classbased">




            <h1>{this.state.no}</h1>
            
            <button className="" onClick={this.increase}>Increase</button>
            <button className="" onClick={this.reset}>Reset</button>
            <button className="" onClick={this.decrease}>Decrease</button>
</div>
            </div>
            );
    }
}
export default Function;