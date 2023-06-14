const chatLog = document.getElementById('chat-log');
const userMessageInput = document.getElementById('user-message');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', sendMessage);
userMessageInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const userMessage = userMessageInput.value;
    if (userMessage.trim() === '') return;

    appendMessage('user', userMessage);

    // Call your ChatGPT API or perform the case law summarization logic here
    const summary = summarizeCaseLaw(userMessage); // Replace with your own function or API call

    appendMessage('bot', summary);

    userMessageInput.value = '';
}

function appendMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.textContent = message;
    chatLog.appendChild(messageElement);
    chatLog.scrollTop = chatLog.scrollHeight;
}
.message {
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 5px;
}

.user {
    background
