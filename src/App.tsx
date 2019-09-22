import React, { useState, useEffect } from 'react';
import './App.css';

function useFriendStatus(friendID: String) {
  const [isOnline, setIsOnline] = useState(false);

  function handleStatusChange(status: boolean) {
    setIsOnline(status);
  }

  useEffect(() => {
    if (friendID === "ino_h") {
      handleStatusChange(true);
    } else {
      handleStatusChange(false);
    };
  });

  return isOnline;
}

const App: React.FC = () => {
  // `setState` を使用して、初期値 0 で、現在の値と設定する関数を取得
  const [count, setCount] = useState(0);

  console.log(useFriendStatus("ino_h"));

  console.log(useFriendStatus("other"));

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default App;
