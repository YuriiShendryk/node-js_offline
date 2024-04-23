const app = require('./src/app');
const { connectDb } = require('./src/db/connection');

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await connectDb();
    app.listen(PORT, (err) => {
      if (err) {
        console.log('Error at server launch', err)
      }
      console.log(`Server running on port ${PORT}`);
    })
  }
  catch (error) { 
    console.log(error);
  }
}



startServer();