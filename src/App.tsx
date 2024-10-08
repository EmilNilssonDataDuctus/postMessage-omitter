import "./App.css";
import { PostMessageTrigger } from "./components/PostMessageReciever";

function App() {
  return (
    <main>
      <div className="body-content">
        <PostMessageTrigger />
      </div>
    </main>
  );
}

export default App;
