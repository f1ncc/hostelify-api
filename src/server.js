const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: `${__dirname}/../config.env` });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`app @ port ${port}`);
});
