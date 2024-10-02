import { useState } from 'react';

export const AlertButton = ({}) => {
  const [message, setMessage] = useState('Alert!');

  return (
    <div>
      <label>
        Message
        <input
          type="text"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
      </label>

      <button onClick={() => alert(message)}>Trigger Alert</button>
    </div>
  );
};
