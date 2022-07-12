import React, { Component } from 'react';

// 컴포넌트 생명주기
// constructor	-> state 초기화 및 메서드 바인딩
// componentDidMount	-> Dom 노드 초기화 및 데이터 fetch
// componentWillUnmount	-> 타이머 제거 및 요청 취소 및 구독 해제
// Functional Component	-> hook 으로 대부분 구현 가능

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    console.log('constructor');
    this.state = { date: new Date() };
    // this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.timerID = setInterval(() => this.tick(), 10000);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    clearInterval(this.timerID);
  }

  tick() {
    // console.log('tick');
    this.setState({ date: new Date() });
  }

  // 퍼블릭 클래스 필드 문법
  handleClick = () => {
    alert(this.state.date);
  };

  render() {
    console.log('render');
    return (
      <div>
        <h1 onClick={this.handleClick}>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default ClassComponent;
