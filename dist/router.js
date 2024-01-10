"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var express_validator_1 = require("express-validator");
var router = (0, express_1.default)();
//  products
router.get("/product", function (req, res) {
    res.json({
        message: 'Product'
    });
});
router.get("/product/:id", function (req, res) {
    res.json({
        message: req.shh_secret
    });
});
router.post("/product", (0, express_validator_1.body)("name").isString(), function (req, res) {
    var errors = (0, express_validator_1.validationResult)(req);
    console.log(errors);
    if (!errors.isEmpty()) {
        debugger;
        res.status(400);
        res.json({
            errors: errors.array(),
        });
    }
    ;
});
router.put("/product/:id", function (req, res) {
});
router.delete("/product/:id", function (req, res) { });
/**
 * Update
 */
router.get("/update", function (req, res) { });
router.get("/update/:id", function (req, res) { });
router.post("/update", function (req, res) { });
router.put("/update/:id", function (req, res) { });
router.delete("/update/:id", function (req, res) { });
/**
 * UpdatePoint
 */
router.get("/updatepoint", function (req, res) { });
router.get("/updatepoint/:id", function (req, res) { });
router.post("/updatepoint", function (req, res) { });
router.put("/updatepoint/:id", function (req, res) { });
router.delete("/updatepoint/:id", function (req, res) { });
exports.default = router;
//# sourceMappingURL=router.js.map