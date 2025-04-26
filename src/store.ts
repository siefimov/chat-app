import { create } from 'zustand';

export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
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
  messages: [],
  inputValue: '',
  isBotLoading: false,
  addMessage: (newMessage) =>
    set((state) => ({ messages: [...state.messages, newMessage] })),
  setInputValue: (newValue) => set({ inputValue: newValue }),
  clearInputValue: () => set({ inputValue: '' }),
  setIsBotLoading: (isLoading) => set({ isBotLoading: isLoading }),
}));
