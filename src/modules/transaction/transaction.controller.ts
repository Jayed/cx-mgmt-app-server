<<<<<<< HEAD
import { NextFunction, Request, Response } from 'express';
=======
import { Request, Response } from 'express';
>>>>>>> 4856e4f2b0d983248a247269977ea82dbb523717
import { TransactionServices } from './transaction.service';
import { Types } from 'mongoose';

// Finding all transactions
<<<<<<< HEAD
const getAllTransactions = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
=======
const getAllTransactions = async (req: Request, res: Response) => {
>>>>>>> 4856e4f2b0d983248a247269977ea82dbb523717
  try {
    const result = await TransactionServices.getAllTransactionsFromDB();
    // console.log('controller:', result);
    // send response
    res.status(200).json({
      success: true,
      message: 'Transactions are retrieved successfully.',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

// Get specific by Id
const getTransactionById = async (
  req: Request,
<<<<<<< HEAD
  res: Response,
  next: NextFunction
) => {
=======
  res: Response
): Promise<Response> => {
>>>>>>> 4856e4f2b0d983248a247269977ea82dbb523717
  try {
    const { id } = req.params; // Correct param extraction
    // console.log(id);
    const transaction = await TransactionServices.getTransactionByIdFromDB(id);

    if (!transaction) {
<<<<<<< HEAD
      res.status(404).json({
=======
      return res.status(404).json({
>>>>>>> 4856e4f2b0d983248a247269977ea82dbb523717
        success: false,
        message: 'transaction not found',
      });
    }

<<<<<<< HEAD
    res.status(200).json({
=======
    return res.status(200).json({
>>>>>>> 4856e4f2b0d983248a247269977ea82dbb523717
      success: true,
      message: 'transaction retrieved successfully',
      data: transaction,
    });
  } catch (error) {
<<<<<<< HEAD
    next(error);
  }
};

// Create new Transaction
const createTransaction = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
=======
    console.error('Error retrieving transaction:', error);
    return res.status(500).json({
      success: false,
      message: 'An error occurred while retrieving the transaction',
      error: error instanceof Error ? error.message : error,
    });
  }
};
// Create new Transaction
// const createTransaction = async (req: Request, res: Response) => {
//   try {
//     const TransactionData = req.body;
//     console.log("TransactionData: ", TransactionData);
//     // will call service func to send this data
//     const result = await TransactionServices.createTransactionIntoDB(TransactionData);
//     // send response
//     res.status(200).json({
//       success: true,
//       message: 'Transaction is created successfully.',
//       data: result,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
const createTransaction = async (req: Request, res: Response) => {
>>>>>>> 4856e4f2b0d983248a247269977ea82dbb523717
  try {
    const transactionData = req.body;

    // Validate the customer ID
    if (
      !transactionData.customer ||
      !Types.ObjectId.isValid(transactionData.customer)
    ) {
<<<<<<< HEAD
      res.status(400).json({
=======
      return res.status(400).json({
>>>>>>> 4856e4f2b0d983248a247269977ea82dbb523717
        success: false,
        message: 'Invalid customer ID',
      });
    }

    // console.log('TransactionData: ', transactionData);

    // Call the service function
    const result = await TransactionServices.createTransactionIntoDB(
      transactionData
    );

    // Send response
    res.status(200).json({
      success: true,
      message: 'Transaction created successfully.',
      data: result,
    });
  } catch (error) {
<<<<<<< HEAD
    next(error);
  }
};

// Update a Transaction
const updateTransactionById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
=======
    console.error('Error creating transaction:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create transaction.',
      error: error instanceof Error ? error.message : error,
    });
  }
};
// const createTransaction = async (req: Request, res: Response) => {
//   try {
//     const transactionData = req.body;

//     console.log("Controller - Received Transaction Data:", transactionData);

//     // Validate required fields before processing
//     if (!transactionData.transactionID || !transactionData.details || !transactionData.customer) {
//       return res.status(400).json({
//         success: false,
//         message: "Missing required fields: transactionID, details, and customer are required.",
//       });
//     }

//     // Call service function to create transaction
//     const result = await TransactionServices.createTransactionIntoDB(transactionData);

//     return res.status(201).json({
//       success: true,
//       message: "Transaction created successfully.",
//       data: result,
//     });
//   } catch (error) {
//     console.error("Error creating transaction:", error);
//     return res.status(500).json({
//       success: false,
//       message: "An error occurred while creating the transaction.",
//       error: error instanceof Error ? error.message : error,
//     });
//   }
// };

// Update a Transaction
const updateTransactionById = async (req: Request, res: Response) => {
>>>>>>> 4856e4f2b0d983248a247269977ea82dbb523717
  try {
    const { TransactionId } = req.params;
    const updatedData = req.body;

    // Call service
    const updatedTransaction =
      await TransactionServices.updateTransactionByIdInDB(
        TransactionId,
        updatedData
      );

    if (!updatedTransaction) {
<<<<<<< HEAD
      res.status(404).json({
=======
      return res.status(404).json({
>>>>>>> 4856e4f2b0d983248a247269977ea82dbb523717
        message: 'Transaction not found',
        status: false,
      });
    }

    res.status(200).json({
      message: 'Transaction updated successfully',
      status: true,
      data: updatedTransaction,
    });
  } catch (error) {
<<<<<<< HEAD
    next(error);
=======
    res.status(500).json({
      message: 'An error occurred while updating the Transaction',
      status: false,
      error: error,
    });
>>>>>>> 4856e4f2b0d983248a247269977ea82dbb523717
  }
};

// Delete a Transaction
<<<<<<< HEAD
const deleteTransactionById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
=======
const deleteTransactionById = async (req: Request, res: Response) => {
>>>>>>> 4856e4f2b0d983248a247269977ea82dbb523717
  try {
    const { TransactionId } = req.params;
    const deletedTransaction =
      await TransactionServices.deleteTransactionByIdFromDB(TransactionId);

    if (!deletedTransaction) {
<<<<<<< HEAD
      res.status(404).json({
=======
      return res.status(404).json({
>>>>>>> 4856e4f2b0d983248a247269977ea82dbb523717
        message: 'Transaction not found',
        status: false,
      });
    }

    res.status(200).json({
      message: 'Transaction deleted successfully',
      status: true,
      data: {},
    });
  } catch (error) {
<<<<<<< HEAD
    next(error);
=======
    res.status(500).json({
      message: 'An error occurred while deleting the Transaction',
      status: false,
      error: error,
    });
>>>>>>> 4856e4f2b0d983248a247269977ea82dbb523717
  }
};

export const TransactionControllers = {
  getAllTransactions,
  getTransactionById,
  createTransaction,
  updateTransactionById,
  deleteTransactionById,
};
