import VicBot from "./BotResponse.js";
const form = document.querySelector("form");
const chatContainer = document.querySelector("#chat-container");

Chats();

form.onsubmit = (e) => {
  e.preventDefault();

  const textPrompt = document.querySelector("#prompt").value;
  if (textPrompt == "") return;

  document.getElementById("empty").classList?.add("hide");
  chatContainer.classList.remove("empty");
  const userText = document.createElement("div");
  userText.className = "user";
  userText.innerHTML = textPrompt.trim();

  chatContainer.append(userText);

  const botText = document.createElement("div");
  botText.className = "bot";

  const BotReply = new VicBot(textPrompt).getReply();
  botText.innerHTML = BotReply;
  chatContainer.append(botText);

  localStorage.setItem("chat", JSON.stringify(chatContainer.innerHTML));

  form.reset();

  chatContainer.scrollTop = chatContainer.scrollHeight;
};

document.querySelector('span[role="button"]').onclick = () => {
  localStorage.removeItem("chat");
  Chats();
};

function Chats() {
  if (localStorage.getItem("chat")) {
    chatContainer.classList.remove("empty");
    chatContainer.innerHTML = JSON.parse(localStorage.getItem("chat"));
  } else {
    chatContainer.classList.add("empty");
    chatContainer.innerHTML = `<div id="empty">Your chat with VicBot will appear here...</div>`;
  }
}

// function generateText(text, botText) {
//   let index = 0;
//   let Interval = setInterval(() => {
//     if (index < text.length) {
//       botText.innerHTML += text.charAt(index);
//       index++;
//     } else {
//       clearInterval(Interval);
//     }
//   }, 100);
// }
