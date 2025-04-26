import './App.css';
import { ChatInput } from './components/ChatInput';
import { ChatWindow } from './components/ChatWindow';

export const App = () => {
  return (
    <div className="app-container">
      <ChatWindow />
      <ChatInput />
    </div>
  );
};

export default App;
