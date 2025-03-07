/* eslint-env node */
import mongoose from 'mongoose';
import app from './app';
import config from './app/config';

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log('Database connected successfully');

    // Start the Express server only if the database connection is successful
    app.listen(config.port, () => {
      console.log(`Server is running on port ${config.port}`);
    });
  } catch (err) {
    console.error('Database connection error:', err);
    process.exit(1); // Exit process if database connection fails
  }
}
main();

// ---------BasicCode_______
// import { Server } from "http";
// import app from "./app";
// const PORT = 5000;

// let server: Server;

// async function bootstrap() {
//   server = app.listen(PORT, () => {
//     console.log(`Example app listening on port ${PORT}`);
//   });
// }

// bootstrap();
