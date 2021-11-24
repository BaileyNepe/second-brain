const appServer = require('./app');
const { connect } = require('./config/db');

connect();

const PORT = process.env.PORT || 5000;

appServer.listen(PORT, console.log(`Server is listening on port ${PORT}`));
