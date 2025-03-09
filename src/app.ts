import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { CustomerRoutes } from './modules/customer/customer.route';
import { TransactionRoutes } from './modules/transaction/transaction.route';
<<<<<<< HEAD
import globalErrorHandler from './app/middlewares/globalErrorhandler';
=======
>>>>>>> 4856e4f2b0d983248a247269977ea82dbb523717

// import cors from 'cors';
const app: Application = express();

//parser (Middleware)
app.use(express.json());
app.use(cors());

// Root route
app.get('/', async (req: Request, res: Response) => {
<<<<<<< HEAD
  // console.log("Root directory");
=======
console.log("Root directory");
>>>>>>> 4856e4f2b0d983248a247269977ea82dbb523717
  res.status(200).json({
    message: 'Hi, Welcome to customerMgmt API Service!',
    success: true,
  });
});

// application routes
app.use('/api/v1/customers', CustomerRoutes);
app.use('/api/v1/transactions', TransactionRoutes);

<<<<<<< HEAD
// app.use('/api/v1/orders', OrderRoutes);
// console.log("app.ts");

app.use(globalErrorHandler);

export default app;

=======

// app.use('/api/v1/orders', OrderRoutes);
// console.log("app.ts");

export default app;


>>>>>>> 4856e4f2b0d983248a247269977ea82dbb523717
// -------BasicCode_________
// import express from 'express'
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello Developers!');
// })
// app.get('/friends', (req, res) => {
//   res.send('Hello Friends!');
// })
// app.get('/', (req, res) => {
//   res.send('Hello Developers!');
// })

// export default app;
