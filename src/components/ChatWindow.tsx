import { useEffect, useRef } from 'react';
import { useChatStore } from '../store';

export const ChatWindow: React.FC = () => {
  const messages = useChatStore((state) => state.messages);
  const messageEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="chat-window">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`message ${message.sender === 'user' ? 'user' : 'bot'}`}
        >
          <div>{message.sender === 'user' ? (
            <span className='avatar user'>U</span>
            ) : (
              <span className='avatar bot'>B</span>
              )}</div>
          <span>{message.text}</span>
        </div>
      ))}
      <div ref={messageEndRef} className='ref'/>
    </div>
  );
};
