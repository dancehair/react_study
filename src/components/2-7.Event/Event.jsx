import React from 'react';

// 이벤트
// 합성 이벤트	            -> 인터페이스는 같지만 직접 대응되지 않음
// Bubble / Capture	        -> Capture > target > Bubble
// return false 지원 안함	  -> e.preventDefault() 해줘야 함

function Event(props) {
  const handleButtonClick = e => {
    console.dir(e);
    console.log('handleButtonClick');
  };

  const handleMouseLeave = e => {
    console.dir(e);
  };

  const handleClickCapture = () => {
    console.log('handleClickCapture');
  };

  const handleClickCapture2 = () => {
    console.log('handleClickCapture2');
  };

  const handleButtonClickBubble = () => {
    console.log('handleButtonClickBubble');
  };

  return (
    <div onClickCapture={handleClickCapture}>
      <div onClickCapture={handleClickCapture2} onClick={handleButtonClickBubble}>
        <button onClick={handleButtonClick} onMouseLeave={handleMouseLeave}>
          Button
        </button>
      </div>
    </div>
  );
}

export default Event;
