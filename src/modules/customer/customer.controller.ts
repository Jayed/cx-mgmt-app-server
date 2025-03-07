import { Request, Response } from 'express';
import {CustomerServices } from './customer.service';

// Create new customer 
const createCustomer = async (req: Request, res: Response) => {
  try {
    const CustomerData = req.body; 
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
    console.log(error);
  }
};

const getAllCustomers = async (req: Request, res: Response) => {
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
    console.log(error);
  }
};

// Get specific customer by Id
const getCustomerById = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params; // Correct param extraction
    const customer = await CustomerServices.getCustomerByIdFromDB(id);

    if (!customer) {
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
  try {
    const { CustomerId } = req.params;
    const updatedData = req.body;

    // Call service
    const updatedCustomer = await CustomerServices.updateCustomerByIdInDB(
      CustomerId,
      updatedData,
    );

    if (!updatedCustomer) {
      return res.status(404).json({
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
    res.status(500).json({
      message: 'An error occurred while updating the Customer',
      status: false,
      error: error,
    });
  }
};

// Delete a customer
const deleteCustomerById = async (req: Request, res: Response) => {
  try {
    const { CustomerId } = req.params;
    const deletedCustomer =
      await CustomerServices.deleteCustomerByIdFromDB(CustomerId);

    if (!deletedCustomer) {
      return res.status(404).json({
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
    res.status(500).json({
      message: 'An error occurred while deleting the Customer',
      status: false,
      error: error,
    });
  }
};


export const CustomerControllers = {
  getAllCustomers,
  getCustomerById,
  createCustomer,
  updateCustomerById,
  deleteCustomerById,
};

