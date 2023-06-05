import express from "express";
import { carService } from "../domain/services/car.service";

export const carRouter = express.Router();

carRouter.get("/", carService.getAllCars);
carRouter.get("/:id", carService.getCarById);
carRouter.post("/", carService.createCar);
carRouter.delete("/:id", carService.deleteCar);
carRouter.put("/:id", carService.updateCar);
