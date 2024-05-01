const app = require('./src/app');
const { connectDb } = require('./src/db/connection');

const PORT = process.env.PORT || 3000;

const startServer = () => {
  try {
    app.listen(PORT, async err => {
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

startServer();
