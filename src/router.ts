import Router from 'express';
import { body, validationResult } from "express-validator";
import { createProduct, getProducts } from './handler/product';
import { handlerInputErrors } from './modules/middleware';


const router = Router();

//  products
 router.get("/product", getProducts);

router.get("/product/:id", (req, res) => {
    res.json({
        message:  req.shh_secret
    })
});

router.post("/product", body("name").isString(), handlerInputErrors, createProduct);

router.put("/product/:id", body("name").isString(), handlerInputErrors, (req, res) => {

});

router.delete("/product/:id", (req, res) => {});


/**
 * Update
 */

 router.get("/update", (req, res) => {});

 router.get("/update/:id", (req, res) => {});
 
 router.post("/update",
    body('title').exists().isString(), 
    body('body').exists().isString(),
    (req, res) => {

    });
 
 router.put("/update/:id",
    body('title').optional(),
    body('body').optional(),
    body('version').optional(),
    body('status').isIn(["IN_PROGRESS", "LIVE", "DEPRECATED", "ARCHIVED"]),
  (req, res) => {

  });
 
 router.delete("/update/:id", (req, res) => {});
 
 /**
  * UpdatePoint
  */
 
 router.get("/updatepoint", (req, res) => {});
 
 router.get("/updatepoint/:id", (req, res) => {});
 
 router.post("/updatepoint",    
    body('name').exists().isString(), 
    body('description').exists().isString(), 
    (req, res) => {});
 
 router.put("/updatepoint/:id", 
    body('name').optional().isString(), 
    body('description').optional().isString(),
 (req, res) => {});
 
 router.delete("/updatepoint/:id", (req, res) => {});
 
 export default router;