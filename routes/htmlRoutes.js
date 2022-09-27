const path = require('path');

module.exports = (app) =>
  app.get('/', (req, res) =>
    res.sendFile(path.join(path.join(__dirname, 'Develop/'), '../client/dist/index.html'))
  );
