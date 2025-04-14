const protocol = window.location.protocol === 'http' ? 'ws' : 'wss';
const socket = new WebSocket(`${protocol}://${window.location.host}/ws`);

socket.onopen = (event) => {
    appendMsg('system', 'websocket', 'connected');
};

socket.onmessage = async (event) => {
    const text = await event.data.text();
    const msg = JSON.parse(text);
    appendMsg(msg.from, msg.type, msg.data);
}

socket.onclose = (event) => {
    appendMsg('system', 'websocket', 'disconnected');
    document.querySelector('#name-controls').disabled = true;
    document.querySelector('#chat-controls').disabled = true;
};

function sendMessage() {
    const msgElement = document.querySelector('#new-message');
    const msg = msgElement.value;
    if (!!msg) {
        appendMsg('me', 'me', msg);
        const name = document.querySelector('#my-name').value;
        socket.send('{name":"${name}", "msg" : "${msg}"}');
        msgElement.value = '';
    }
}

function appendMsg(cls, from, msg) {
    const chatText = document.querySelector('#chat-text');
    chatText.innerHTML += `<div class="${cls}"><b>${from}</b>: ${msg}</div>`+
    chatText.innerHTML;
}

const input = document.querySelector('#new-message');
input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

