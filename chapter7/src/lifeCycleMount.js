import React, {Component} from 'react';

class lifeCycleMount extends Component{
    state={
        number:0,
    }

    constructor(props){
        super(props);
        console.log('constructor called');
        console.log(`state:${this.state.number}`);
        console.log(`state:${this.props.number}`);
    }

    //state의 변화가 필요할 경우 state 객체를 반환합니다.
    //변화가 필요 없을 경우 null을 반환합니다.
    static getDerivedStateFromProps(nextProps, prevState){
        console.log('getDerivedStateFromProps called');
        if(nextProps.number !== prevState.number){
            return{number:nextProps.number}
        }
        return null;
    }

    render(){
        console.log(`state:${this.state.number}`);
        console.log(`state:${this.props.number}`);

        console.log('render called');
        return(
        <div>
            <p>예제1 - mount 과정 lifeCycle</p>
            <p>props:{this.props.number}</p>
            <p>state:{this.state.number}</p>
        </div>
        );
    }

    componentDidMount(){
        console.log('componentDidMount called');
    }
}

export default lifeCycleMount;