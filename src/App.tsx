import './App.css';
import { ChatInput } from './components/ChatInput';
import { ChatWindow } from './components/ChatWindow';

export const App = () => {
  return (
    <>
      <ChatWindow />
      <ChatInput />
    </>
  );
};

export default App;
