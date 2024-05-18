const app = require('./src/app');
const { connectDb } = require('./src/db/connection');
const http = require('http');
const { User } = require('./src/model/userModel');
const { Server } = require('socket.io');
const { Message } = require('./src/model/messageModel');
const { exec } = require('child_process');
const server = http.createServer(app);

const PORT = process.env.PORT || 3000;

const PUBLIC_WEBSITE_URL = process.env.PUBLIC_WEBSITE_URL;

const io = new Server(server, { cors: { origin: PUBLIC_WEBSITE_URL, methods: ['GET', 'POST'] } });

const startServer = () => {
  try {
    server.listen(PORT, async err => {
      if (err) {
        console.log('Error at server launch', err);
      }
      await connectDb();
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

io.sockets.on('connection', async client => {
  const broadcast = (event, data) => {
    client.emit('message', data);
    client.broadcast.emit(event, data);
  };

  client.on('message', async message => {
    const newMessage = new Message();
    const user = await User.findById(message.author);
    Object.assign(newMessage, { text: message.text, author: user?._id });
    const createdMessage = await newMessage.save();

    const messageWithAuthor = await createdMessage.populate({
      path: 'author',
      select: { firstName: 1, lastName: 1, email: 1, _id: 1 },
    });
    broadcast('message', messageWithAuthor);
  });
});

startServer();
