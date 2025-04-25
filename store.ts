import { create } from "zustand";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
}

interface ChatState {
  messages: Message[];
  inputValue: string;
  addMessage: (newMessage: Message) => void;
  setInputValue: (newValue: string) => void;
  clearInputValue: () => void;
}

export const useChatStore = create<ChatState>((set) => ({
  messages: [],
  inputValue: "",
  addMessage: (newMessage) =>
    set((state) => ({ messages: [...state.messages, newMessage] })),
  setInputValue: (newValue) => set({ inputValue: newValue }),
  clearInputValue: () => set({ inputValue: "" }),
}));
