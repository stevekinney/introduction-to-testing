import { useState } from 'react';

export const AlertButton = ({
  onSubmit = () => {},
  defaultMessage = 'Alert!',
}) => {
  const [message, setMessage] = useState(defaultMessage);

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

      <button onClick={() => onSubmit(message)}>Trigger Alert</button>
    </div>
  );
};
