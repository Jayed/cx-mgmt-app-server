<<<<<<< HEAD
import { NextFunction, Request, Response } from 'express';
import { CustomerServices } from './customer.service';

// Create new customer
const createCustomer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const CustomerData = req.body;
=======
import { Request, Response } from 'express';
import {CustomerServices } from './customer.service';

// Create new customer 
const createCustomer = async (req: Request, res: Response) => {
  try {
    const CustomerData = req.body; 
>>>>>>> 4856e4f2b0d983248a247269977ea82dbb523717
    // console.log("CustomerData: ", CustomerData);
    // will call service func to send this data
    const result = await CustomerServices.createCustomerIntoDB(CustomerData);
    // send response
    res.status(200).json({
      success: true,
      message: 'Customer is created successfully.',
      data: result,
    });
  } catch (error) {
<<<<<<< HEAD
    next(error);
  }
};

const getAllCustomers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
=======
    console.log(error);
  }
};

const getAllCustomers = async (req: Request, res: Response) => {
>>>>>>> 4856e4f2b0d983248a247269977ea82dbb523717
  try {
    const result = await CustomerServices.getAllCustomersFromDB();
    // console.log("controller: ",result);
    // console.log("controller:", result);
    // send response
    res.status(200).json({
      success: true,
      message: 'Customers are retrieved successfully.',
      data: result,
    });
  } catch (error) {
<<<<<<< HEAD
    next(error);
=======
    console.log(error);
>>>>>>> 4856e4f2b0d983248a247269977ea82dbb523717
  }
};

// Get specific customer by Id
<<<<<<< HEAD
const getCustomerById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
=======
const getCustomerById = async (req: Request, res: Response): Promise<Response> => {
>>>>>>> 4856e4f2b0d983248a247269977ea82dbb523717
  try {
    const { id } = req.params; // Correct param extraction
    const customer = await CustomerServices.getCustomerByIdFromDB(id);

    if (!customer) {
<<<<<<< HEAD
      res.status(404).json({
        success: false,
        message: 'Customer not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Customer retrieved successfully',
      data: customer,
    });
  } catch (error) {
    next(error);
  }
};

// Update a customer
const updateCustomerById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
=======
      return res.status(404).json({
        success: false,
        message: "Customer not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Customer retrieved successfully",
      data: customer,
    });
  } catch (error) {
    console.error("Error retrieving customer:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while retrieving the customer",
      error: error instanceof Error ? error.message : error,
    });
  }
};

// Update a customer 
const updateCustomerById = async (req: Request, res: Response) => {
>>>>>>> 4856e4f2b0d983248a247269977ea82dbb523717
  try {
    const { CustomerId } = req.params;
    const updatedData = req.body;

    // Call service
    const updatedCustomer = await CustomerServices.updateCustomerByIdInDB(
      CustomerId,
<<<<<<< HEAD
      updatedData
    );

    if (!updatedCustomer) {
       res.status(404).json({
=======
      updatedData,
    );

    if (!updatedCustomer) {
      return res.status(404).json({
>>>>>>> 4856e4f2b0d983248a247269977ea82dbb523717
        message: 'Customer not found',
        status: false,
      });
    }

    res.status(200).json({
      message: 'Customer updated successfully',
      status: true,
      data: updatedCustomer,
    });
  } catch (error) {
<<<<<<< HEAD
    next(error);
=======
    res.status(500).json({
      message: 'An error occurred while updating the Customer',
      status: false,
      error: error,
    });
>>>>>>> 4856e4f2b0d983248a247269977ea82dbb523717
  }
};

// Delete a customer
<<<<<<< HEAD
const deleteCustomerById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { CustomerId } = req.params;
    const deletedCustomer = await CustomerServices.deleteCustomerByIdFromDB(
      CustomerId
    );

    if (!deletedCustomer) {
       res.status(404).json({
=======
const deleteCustomerById = async (req: Request, res: Response) => {
  try {
    const { CustomerId } = req.params;
    const deletedCustomer =
      await CustomerServices.deleteCustomerByIdFromDB(CustomerId);

    if (!deletedCustomer) {
      return res.status(404).json({
>>>>>>> 4856e4f2b0d983248a247269977ea82dbb523717
        message: 'Customer not found',
        status: false,
      });
    }

    res.status(200).json({
      message: 'Customer deleted successfully',
      status: true,
      data: {},
    });
  } catch (error) {
<<<<<<< HEAD
    next(error);
  }
};

=======
    res.status(500).json({
      message: 'An error occurred while deleting the Customer',
      status: false,
      error: error,
    });
  }
};


>>>>>>> 4856e4f2b0d983248a247269977ea82dbb523717
export const CustomerControllers = {
  getAllCustomers,
  getCustomerById,
  createCustomer,
  updateCustomerById,
  deleteCustomerById,
};
<<<<<<< HEAD
=======

>>>>>>> 4856e4f2b0d983248a247269977ea82dbb523717
