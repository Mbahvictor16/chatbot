export default class VicBot {
  Response = {
    greetings: [
      "Hi, how can I help you?",
      "Hello, how are you?",
      "Good day, what's popping? 😄",
      "Hi there!👋, what can I help with you?",
    ],

    dumb: [
      "I do not understand what you're saying",
      "I'm just a simple AI and can't understand anything now!",
    ],

    creation: ["I was created by Mbah Victor", "I was built by Mbah Victor"],

    performance: {
      chatGPT: [],
      bardAI: [],
    },
  };
  constructor(message) {
    this.message = message;
  }

  getReply() {
    if (
      /hello/i.test(this.message) ||
      /hi/i.test(this.message) ||
      /good day/i.test(this.message) ||
      /good morning/i.test(this.message) ||
      /good afternoon/i.test(this.message) ||
      /good evening/i.test(this.message)
    ) {
      return this.Response.greetings[
        Math.floor(Math.random() * this.Response.greetings.length)
      ];
    } else if (
      /created you/i.test(this.message) ||
      /made you/i.test(this.message) ||
      /who are you/i.test(this.message)
    ) {
      return this.Response.creation[
        Math.floor(Math.random() * this.Response.creation.length)
      ];
    } else {
      return this.Response.dumb[
        Math.floor(Math.random() * this.Response.dumb.length)
      ];
    }
  }
}
