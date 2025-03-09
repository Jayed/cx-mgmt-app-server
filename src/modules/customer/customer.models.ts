// 2. Create a Schema corresponding to the document interface.
// 3. Create a Model.

import { Schema, model } from 'mongoose';
import { ICustomer } from './customer.interface';

const CustomerSchema = new Schema<ICustomer>(
  {
    customerId: { type: String, required: true, unique: true },
    name: {
      type: String,
<<<<<<< HEAD
      required: [true, 'Name Field required.'],
=======
      required: [true, 'Name is required.'],
>>>>>>> 4856e4f2b0d983248a247269977ea82dbb523717
      trim: true,
    },
    mobile: {
      type: String,
      required: [true, 'Mobile number is required.'],
    },
    address: { type: String, required: [true, 'Address is required.'] },
  },
  { timestamps: true }
);

// Export the Product model
export const CustomerModel = model<ICustomer>('Customer', CustomerSchema);
