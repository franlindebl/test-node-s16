import express from "express";
import multer from "multer";
import { brandService } from "../domain/services/brand.service";
const upload = multer({ dest: "public" });

export const brandRouter = express.Router();

brandRouter.get("/", brandService.getAllBrands);
brandRouter.get("/:id", brandService.getBrandById);
brandRouter.get("/name/:name", brandService.getBrandByName);
brandRouter.post("/", brandService.createBrand);
brandRouter.delete("/:id", brandService.deleteBrand);
brandRouter.put("/:id", brandService.updateBrand);
brandRouter.post("/logo-upload", upload.single("logo"), brandService.updateBrandLogo);
