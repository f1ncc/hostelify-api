const { connect } = require('mongoose');
const { config } = require('dotenv');
const app = require('./app');

config();

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

(async () => {
  try {
    await connect(
      process.env.NODE_ENV === 'development' ? process.env.DATABASE_LOCAL : DB,
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
      }
    );
    console.log('DB is connected');
  } catch (err) {
    console.log('DB connection failed');
  }
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`app @ port ${port}`);
  });
})();
