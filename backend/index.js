require('dotenv').config();

const app = require('./src/app.js');

// eslint-disable-next-line no-undef
const port = process.env.PORT || 5000;
console.log("PORT:",port);

app.listen(port, (err) => {
  if (err) {
    console.error("Serveur inaccessible");
  } else {
    console.log(`Le serveur écoute. port: ${port}`);
  }
});
