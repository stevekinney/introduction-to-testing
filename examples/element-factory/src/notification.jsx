import { useState } from 'react';

export const Notification = () => {
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');

  const showNotification = () => {
    console.log({ content });
    if (!content) return;
    setMessage(content);
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div>
      <label>
        Message Content
        <input
          type="text"
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
      </label>

      <button onClick={showNotification}>Show Notification</button>

      {message && <p data-testid="message">{message}</p>}
    </div>
  );
};
