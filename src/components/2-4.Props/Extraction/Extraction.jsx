import React from 'react';

// Props
// Props	-> 컴포넌트에 전달되는 단일 객체
// 순수함수처럼 동작	-> Props 자체를 수정해서는 안됨
// 컴포넌트 합성	-> 여러 컴포넌트를 모아서
// 컴포넌트 추출	-> 여러곳에서 사용되거나 / 복잡한 경우

function formatDate(date) {
  return date.toLocaleDateString();
}

function Avatar(props) {
  return <img className='Avatar' src={props.user.avatarUrl} alt={props.user.name} />;
}

function UserInfo(props) {
  return (
    <div className='UserInfo'>
      <Avatar user={props.user}></Avatar>
      <div className='UserInfo-name'>{props.user.name}</div>
    </div>
  );
}

function Comment(props) {
  return (
    <div className='Comment'>
      <UserInfo user={props.author}></UserInfo>

      <div className='Comment-text'>{props.text}</div>
      <div className='Comment-date'>{formatDate(props.date)}</div>
    </div>
  );
}

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64',
  },
};

export default function extraction() {
  return <Comment date={comment.date} text={comment.text} author={comment.author} />;
}
