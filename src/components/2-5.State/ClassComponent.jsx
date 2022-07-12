import React, { Component } from 'react';

// State
// 컴포넌트 내의 상태	-> 자신의 출력값을 변경
// Class component	-> State LifeCycle(componentDidMount, componentWillUnmount) 으로 상태 관리
// Functional component	-> 훅으로 관리
// 유의사항	-> 직접 수정 X / 비동기적일 수 있음

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
