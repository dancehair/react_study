import React, { useEffect, useState } from 'react';

// State
// 컴포넌트 내의 상태	-> 자신의 출력값을 변경
// Class component	-> State LifeCycle(componentDidMount, componentWillUnmount) 으로 상태 관리
// Functional component	-> 훅으로 관리
// 유의사항	-> 직접 수정 X / 비동기적일 수 있음

function FunctionalComponent(props) {
  const [date, setDate] = useState(new Date());

  const tick = () => {
    setDate(new Date());
  };

  useEffect(() => {
    console.log('useEffect run');

    const interval = setInterval(() => tick(), 1000);

    return () => {
      console.log('useEffect clean up');
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h1>Hello, world! It's Functional</h1>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
}

export default FunctionalComponent;
