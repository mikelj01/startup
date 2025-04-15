

class Message {
  constructor(from, value) {
    this.from = from;
    this.value = value;
  }
}

class MessageEvent {
  events = [];
  handlers = [];


  constructor() {
    let port = window.location.port;
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    this.messageQueue = [];
    this.socket = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);
    this.socket.onopen = (event) => {
      // this.receiveEvent(new Message('Loveseat ', 'connected'));
      this.messageQueue.forEach((msg) => {
        this.socket.send(JSON.stringify(msg));
      });
      this.messageQueue = [];
    };
    this.socket.onclose = (event) => {
      this.receiveEvent(new Message('Loveseat ', 'disconnected'));
    };
    this.socket.onmessage = async (msg) => {
      try {
        const event = JSON.parse(await msg.data.text());
        this.receiveEvent(event);
      } catch {}
    };
  }

  BroadcastMessage(from, value) {
    console.log('broadcast message');
    const event = new Message(from, value);
    if (this.socket.readyState === WebSocket.OPEN) {
    this.socket.send(JSON.stringify(event));}
    else {
      console.log('socket not open');
      console.log(value);
      this.messageQueue.push(event);
    }
  }

  addHandler(handler) {
    this.handlers.push(handler);
  }

  removeHandler(handler) {
    this.handlers.filter((h) => h !== handler);
  }

  receiveEvent(event) {
    this.events.push(event);

    this.events.forEach((e) => {
      this.handlers.forEach((handler) => {
        handler(e);
      });
    });
  }
}

const messanger = new MessageEvent();
export { Message, messanger };

































// const protocol = window.location.protocol === 'http' ? 'ws' : 'wss';
// const socket = new WebSocket(`${protocol}://${window.location.host}/ws`);

// socket.onopen = (event) => {
//     appendMsg('system', 'websocket', 'connected');
// };

// socket.onmessage = async (event) => {
//     const text = await event.data.text();
//     const msg = JSON.parse(text);
//     appendMsg(msg.from, msg.type, msg.data);
// }

// socket.onclose = (event) => {
//     appendMsg('system', 'websocket', 'disconnected');
//     document.querySelector('#name-controls').disabled = true;
//     document.querySelector('#chat-controls').disabled = true;
// };

// function sendMessage() {
//     const msgElement = document.querySelector('#new-message');
//     const msg = msgElement.value;
//     if (!!msg) {
//         appendMsg('me', 'me', msg);
//         const name = document.querySelector('#my-name').value;
//         socket.send('{name":"${name}", "msg" : "${msg}"}');
//         msgElement.value = '';
//     }
// }

// function appendMsg(cls, from, msg) {
//     const chatText = document.querySelector('#chat-text');
//     chatText.innerHTML += `<div class="${cls}"><b>${from}</b>: ${msg}</div>`+
//     chatText.innerHTML;
// }

// const input = document.querySelector('#new-message');
// input.addEventListener('keypress', (event) => {
//     if (event.key === 'Enter') {
//         sendMessage();
//     }
// });

