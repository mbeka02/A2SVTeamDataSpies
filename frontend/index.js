const chatMessages = document.getElementById("chat-messages");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");

// Function to add user and bot messages to the chat
function addMessage(message, isUser) {
  const messageDiv = document.createElement("div");
  messageDiv.className = isUser ? "user-message" : "bot-message";
  messageDiv.textContent = message;
  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to bottom
}

// Function to handle user input
function handleUserInput() {
  const userMessage = userInput.value;
  if (userMessage.trim() === "") return;

  addMessage(userMessage, true);

  // Simulate a bot response (replace with actual API call)
  setTimeout(() => {
    const botResponse = "Hello! I am your chatbot.";
    addMessage(botResponse, false);
  }, 1000);

  userInput.value = "";
}

// Event listener for the Send button
sendButton.addEventListener("click", handleUserInput);

// Event listener for Enter key in the input field
userInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    handleUserInput();
  }
});
