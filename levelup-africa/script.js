function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function toggleChat() {
  const box = document.getElementById("chatbox");
  box.style.display = box.style.display === "block" ? "none" : "block";
}

function sendMessage() {
  const input = document.getElementById("userInput");
  const msg = input.value.trim();
  if (!msg) return;

  addMessage("You", msg);
  input.value = "";

  setTimeout(() => {
    addMessage("Bot", getBotReply(msg));
  }, 500);
}

function addMessage(sender, text) {
  const messages = document.getElementById("messages");
  messages.innerHTML += `<p><strong>${sender}:</strong> ${text}</p>`;
  messages.scrollTop = messages.scrollHeight;
}

function clearChat() {
  document.getElementById("messages").innerHTML = "";
}

function getBotReply(msg) {
  msg = msg.toLowerCase();

  if (msg.includes("level up")) return "Level-Up Africa is a youth empowerment movement.";
  if (msg.includes("conference")) return "The conference focuses on leadership, innovation and growth.";
  if (msg.includes("register")) return "Scroll down to the registration section to sign up.";
  if (msg.includes("date")) return "Event date will be announced soon.";
  if (msg.includes("contact")) return "You can contact us via email or WhatsApp (details coming soon).";

  return "Thanks for your question. More details will be updated soon.";
}

/* Voice */
function startVoice() {
  if (!('webkitSpeechRecognition' in window)) {
    alert("Voice not supported on this browser");
    return;
  }

  const recognition = new webkitSpeechRecognition();
  recognition.lang = "en-US";
  recognition.start();

  recognition.onresult = function(event) {
    document.getElementById("userInput").value =
      event.results[0][0].transcript;
  };
}

/* Form success */
document.getElementById("registerForm").addEventListener("submit", function(e){
  e.preventDefault();
  document.getElementById("successMsg").innerText =
    "✅ Registration submitted successfully!";
});
