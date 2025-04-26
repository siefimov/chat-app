import { useRef } from 'react';
import { useChatStore } from '../store';
import { Message } from '../store';

export const ChatInput: React.FC = () => {
  const inputValue = useChatStore((state) => state.inputValue);
  const setInputValue = useChatStore((state) => state.setInputValue);
  const addMessage = useChatStore((state) => state.addMessage);
  const clearInputValue = useChatStore((state) => state.clearInputValue);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const newMessage: Message = {
        id: Date.now().toString(),
        text: inputValue,
        sender: 'user',
      };
      addMessage(newMessage);
      clearInputValue();

      inputRef.current?.focus();

      setTimeout(() => {
        const botMessage: Message = {
          id: Date.now().toString() + '-bot',
          text: `Automatic answer to: "${newMessage.text}"`,
          sender: 'bot',
        };
        addMessage(botMessage);
      }, 1000);
    }
  };

  return (
    <div className="chat-input">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter message"
        ref={inputRef}
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};
