/* eslint-env node */
<<<<<<< HEAD
import mongoose from 'mongoose';
import app from './app';
import config from './app/config';
=======
import mongoose from "mongoose";
import app from "./app";
import config from "./app/config";
>>>>>>> 4856e4f2b0d983248a247269977ea82dbb523717

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
<<<<<<< HEAD
    console.log('Database connected successfully');
=======
    console.log("Database connected successfully");
>>>>>>> 4856e4f2b0d983248a247269977ea82dbb523717

    // Start the Express server only if the database connection is successful
    app.listen(config.port, () => {
      console.log(`Server is running on port ${config.port}`);
    });
  } catch (err) {
<<<<<<< HEAD
    console.error('Database connection error:', err);
    process.exit(1); // Exit process if database connection fails
  }
}
=======
    console.error("Database connection error:", err);
    process.exit(1); // Exit process if database connection fails
  }
}

>>>>>>> 4856e4f2b0d983248a247269977ea82dbb523717
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

<<<<<<< HEAD
// bootstrap();
=======
// bootstrap();
>>>>>>> 4856e4f2b0d983248a247269977ea82dbb523717
