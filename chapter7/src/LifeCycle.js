import React, {Component} from 'react';

class lifeCycle extends Component{
    state ={
        number:0,
        color:null,
    }

    myRef = null;

    constructor(props){
        super(props);
        console.log('constructor');
    }

    static getDerivedStateFromPropts(nextProps, prevState){
        console.log('getDerivedStateFromProps');
        if(nextProps.color !== prevState.color){
            return {color:nextProps.color};
        }
        return null;
    }
    
    componentDidMount(){
        console.log('componentDidMount');
    }

    shouldComponentUpdate(nextProprs,nextState){
        console.log('shouldComponentUpdate', nextProprs, nextState);

        return nextState.number%2!==0;
    }

    handleClick =()=>{
        this.setState({number:this.state.number+1});
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('getSnapShotBeforeUpdate');
        if(prevProps.color !== this.props.color){
            return this.myRef.style.color;
        }
    }
    
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('componentDidUpdate', prevProps, prevState);
        if(snapshot){
            console.log('업데이트 되기 직전 색상', snapshot);
        }
    }

    render(){
        console.log('render');
        const style={
            color:this.props.color
        };
        return(
            <div>
                <h1 style={style} ref={ref=>this.myRef=ref}>
                    {this.state.number}
                </h1>
                <p>color:{this.state.color}</p>
                <button onClick={this.handleClick}>
                    더하기
                </button>
            </div>
        )
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');
    }
}
export default lifeCycle;