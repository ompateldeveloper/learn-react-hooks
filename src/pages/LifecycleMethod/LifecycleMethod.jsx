import React, { Component } from 'react'

export default class LifecycleMethod extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }
    componentDidMount() {
        console.log('Component did mount');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Component did update');
    }

    componentWillUnmount() {
        console.log('Component will unmount');
    }

    componentDidCatch(error, info) {
        console.log('Component caught an error');
    }
    render(){
        return (
            <div>
                LifecycleMethod
            </div>
          );
    }
}
