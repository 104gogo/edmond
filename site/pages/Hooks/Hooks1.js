import React, { useState } from 'react';
import { Button } from 'antd';

export default function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(10);

  return (
    <div>
      <p>You clicked {count} times</p>
      <Button onClick={() => setCount(count + 1)}>
        Click me
      </Button>
    </div>
  );
}
