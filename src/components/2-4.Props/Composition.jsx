import React from 'react';

// Props
// Props	-> 컴포넌트에 전달되는 단일 객체
// 순수함수처럼 동작	-> Props 자체를 수정해서는 안됨
// 컴포넌트 합성	-> 여러 컴포넌트를 모아서
// 컴포넌트 추출	-> 여러곳에서 사용되거나 / 복잡한 경우

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

export default function Composition() {
  return (
    <div>
      <Welcome name={'Jimmy'} />
      <Welcome name={'Timmy'} />
      <Welcome name={'Tommy'} />
      <Welcome name={'Amy'} />
    </div>
  );
}
