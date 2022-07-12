import React from 'react';

// 조건부 렌더링
// if   -> if(condition){return A} else {return B}
// &&   -> condition && A, falsy 주의
// 삼항연산자  -> condition ? A : B
// 아예 안그리고 싶은 경우  -> return null;

function UserGreeting(props) {
  return (
    <h1>
      {props.name && `${props.name},`} Welcome {props.count ? `It's ${props.count} times` : null}
    </h1>
  );
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  // if (props.isLoggedIn) {
  //   return <UserGreeting name='jimmy' count={0} />;
  // }
  //
  // return <GuestGreeting />;

  return props.isLoggedIn ? <UserGreeting name='timmy' count={1} /> : <GuestGreeting />;
}

function Condition(props) {
  const isLoggedIn = true;
  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default Condition;
