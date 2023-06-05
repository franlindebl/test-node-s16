/**
 * @swagger
 * components:
 *  schemas:
 *    Car:
 *      type: object
 *      required:
 *        - brand
 *        - model
 *        - year
 *        - price
 *      properties:
 *        id:
 *          type: string
 *          description: The auto-generated id of the car
 *        brand:
 *          type: string
 *          description: The brand of the car
 *        model:
 *          type: string
 *          description: The model of the car
 *        plate:
 *          type: string
 *          description: The plate of the car
 *        power:
 *          type: number
 *          description: The horsepower of this car
 *        owner:
 *          type: string
 *          description: The owner ID of this car
 */

import mongoose, { type ObjectId } from "mongoose";
const Schema = mongoose.Schema;

export interface ICar {
  brand: ObjectId;
  model: string;
  plate: string;
  power: number;
  owner: ObjectId;
}

// Creamos el schema del coche
const carSchema = new Schema<ICar>(
  {
    brand: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Brand",
      required: false,
    },
    model: {
      type: String,
      required: true,
      trim: true,
      minLength: 3,
      maxLength: 40,
    },
    plate: {
      type: String,
      required: false,
      trim: true,
      minLength: 3,
      maxLength: 20,
    },
    power: {
      type: Number,
      required: false,
      min: 5,
      max: 2000,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export const Car = mongoose.model<ICar>("Car", carSchema);
