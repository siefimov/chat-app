import { create } from 'zustand';

export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatState {
  messages: Message[];
  inputValue: string;
  isBotLoading: boolean;
  addMessage: (newMessage: Message) => void;
  setInputValue: (newValue: string) => void;
  clearInputValue: () => void;
  setIsBotLoading: (isLoading: boolean) => void;
}

export const useChatStore = create<ChatState>((set) => ({
  messages: localStorage.getItem('chat-history')
    ? JSON.parse(localStorage.getItem('chat-history') as string)
    : [],
  inputValue: '',
  isBotLoading: false,
  addMessage: (newMessage) =>
    set((state) => {
      const updatedMessages = [...state.messages, newMessage];
      localStorage.setItem('chat-history', JSON.stringify(updatedMessages));
      return {
        messages: updatedMessages,
      };
    }),
  setInputValue: (newValue) => set({ inputValue: newValue }),
  clearInputValue: () => set({ inputValue: '' }),
  setIsBotLoading: (isLoading) => set({ isBotLoading: isLoading }),
}));
