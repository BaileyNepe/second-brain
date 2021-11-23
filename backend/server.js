const appServer = require("./app");
const connectDB = require("./config/db");

connectDB();

const PORT = process.env.PORT || 5000;

appServer.listen(PORT, console.log(`Server is listening on port ${PORT}`));
