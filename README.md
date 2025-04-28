# Chat Application

This is a simple Single Page Application (SPA) that simulates a chat between a user and a system. It does not connect to a real WebSocket server; all data is emulated.

Demo[]

## How to Run the Project

To run this project locally, please follow these steps:

1.  **Clone the repository:**
    ```
    git clone https://github.com/siefimov/chat-app.git
    cd chat-app
    ```
    
2.  **Install dependencies:**
    ```
    pnpm install
    ```

3.  **Start the development server:**
    ```
    pnpm run dev
    ```

    This command will start the Vite development server. You should see an address in your terminal (usually `http://localhost:5173/`). Open this address in your web browser to view the application.

## Autoscroll Implementation

The automatic scrolling to the bottom of the chat window upon receiving a new message is implemented using the following React features:

1.  **`useRef`:** A `ref` called `messageEndRef` is created using `useRef()` and attached to an empty `div` element at the very bottom of the list of messages in the `ChatWindow` component.

2.  **`useEffect`:** An effect hook is used to trigger the scrolling behavior. This effect depends on the `messages` array from the Zustand store. Whenever a new message is added to the `messages` array (which causes the component to re-render), the effect runs.

3.  **`scrollIntoView()`:** Inside the effect, the `scrollIntoView({ behavior: 'smooth' })` method is called on the `current` property of the `messageEndRef`. This smoothly scrolls the browser window so that the referenced `div` (which is at the bottom of the messages) becomes visible to the user, effectively scrolling to the latest message.

    ```typescript
    const messageEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
      messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
      scrollToBottom();
    }, [messages]);

    return (
      <div className="chat-window">
        {/* ... messages ... */}
        <div ref={messageEndRef} />
      </div>
    );
    ```

## Why Zustand was Chosen Over Redux

Zustand was chosen as the state management library for this project due to its simplicity and ease of use, especially for a moderately complex SPA like this chat application. Here are the main reasons for this choice over Redux:

* **Simplicity and Less Boilerplate:** Zustand requires less boilerplate code compared to Redux. Defining the state and actions is more straightforward, without the need for separate actions, reducers, and constants. This leads to cleaner and more concise code.

* **Flexibility:** While Redux is excellent for large, complex applications with intricate state logic and a need for strict traceability, Zustand offers a more flexible approach that is well-suited for projects where the state management complexity is manageable. For this chat application, Zustand provides a sufficient and simpler solution for handling the chat history and input value.
