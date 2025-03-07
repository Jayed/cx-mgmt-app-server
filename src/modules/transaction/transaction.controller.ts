import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import { TransactionServices } from './transaction.service';
import { Types } from 'mongoose';

// Get all transactions
const getAllTransactions = asyncHandler(async (req: Request, res: Response) => {
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
});

// Get specific transaction by ID
// const getTransactionById = async (
//   req: Request,
//   res: Response
// ): Promise<Response> => {
//   try {
//     const { id } = req.params; // Correct param extraction
//     // console.log(id);
//     const transaction = await TransactionServices.getTransactionByIdFromDB(id);

//     if (!transaction) {
//       return res.status(404).json({
//         success: false,
//         message: 'transaction not found',
//       });
//     }

//     return res.status(200).json({
//       success: true,
//       message: 'transaction retrieved successfully',
//       data: transaction,
//     });
//   } catch (error) {
//     console.error('Error retrieving transaction:', error);
//     return res.status(500).json({
//       success: false,
//       message: 'An error occurred while retrieving the transaction',
//       error: error instanceof Error ? error.message : error,
//     });
//   }
// };
const getTransactionById = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;

  // Validate if ID is a valid MongoDB ObjectId
  if (!Types.ObjectId.isValid(id)) {
    res.status(400);
    throw new Error('Invalid transaction ID format');
  }

  const transaction = await TransactionServices.getTransactionByIdFromDB(id);

  if (!transaction) {
    res.status(404);
    throw new Error('Transaction not found');
  }

  res.status(200).json({
    success: true,
    message: 'Transaction retrieved successfully',
    data: transaction,
  });
});

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
const createTransaction = asyncHandler( async (req: Request, res: Response) => {
  try {
    const transactionData = req.body;

    // Validate the customer ID
    if (
      !transactionData.customer ||
      !Types.ObjectId.isValid(transactionData.customer)
    ) {
      return res.status(400).json({
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
    console.error('Error creating transaction:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create transaction.',
      error: error instanceof Error ? error.message : error,
    });
  }
});
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
const updateTransactionById = asyncHandler(
  async (req: Request, res: Response) => {
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
        return res.status(404).json({
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
      res.status(500).json({
        message: 'An error occurred while updating the Transaction',
        status: false,
        error: error,
      });
    }
  }
);

// Delete a Transaction
const deleteTransactionById = asyncHandler(
  async (req: Request, res: Response) => {
    try {
      const { TransactionId } = req.params;
      const deletedTransaction =
        await TransactionServices.deleteTransactionByIdFromDB(TransactionId);

      if (!deletedTransaction) {
        return res.status(404).json({
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
      res.status(500).json({
        message: 'An error occurred while deleting the Transaction',
        status: false,
        error: error,
      });
    }
  }
);

export const TransactionControllers = {
  getAllTransactions,
  getTransactionById,
  createTransaction,
  updateTransactionById,
  deleteTransactionById,
};
