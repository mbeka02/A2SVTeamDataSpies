//Handle chat logic
import { useState } from "react";

export default function Chat() {
  const [userMessages, setUserMessages] = useState([]);
  const [chatbotMessages, setChatbotMessages] = useState([]);
  const [fieldValue, setFieldValue] = useState("");

  //placeholder function
  const handleSubmit = (e) => {
    e.preventDefault();
    setUserMessages([...userMessages, fieldValue]);
    const chatbotResponse = "This is a placeholder response";
    setChatbotMessages([...chatbotMessages, chatbotResponse]);
  };

  return (
    <div class="chat-container">
      <div className="chat-messages" id="chat-messages">
        {userMessages.map((message, index) => (
          <div className="user-message" key={index}>
            {message}
          </div>
        ))}
        {chatbotMessages.map((message, index) => (
          <div className="bot-message" key={index}>
            {message}
          </div>
        ))}
      </div>
      <form className="input-container" onSubmit={handleSubmit}>
        <input
          type="text"
          className="input-field"
          id="user-input"
          placeholder="Type your message..."
          value={fieldValue}
          onChange={(e) => setFieldValue(e.target.value)}
        />
        <button className="send-button" id="send-button">
          Send
        </button>
      </form>
    </div>
  );
}
