const express = require("express");
const Unit = require("../model/unit");
const router = express.Router();


router.get("/:id", (req, res) => {
    Unit.findById(req.params.id, (error, result) => {
        if(error){
            res.status(500).json(error);
        }
        else{
            res.json(result);
        }
    });
});

router.get("/", (req, res) => {
    Unit.find({}, (error, result) => {
        if(error){
            res.status(500).json(error);
        }
        else{
            res.json(result)
        }
    });
});

router.post("/", (req, res) => {    

    let newObj = new Unit({
        alamat : req.body.alamat,
        cluster : req.body.cluster,
        lt : req.body.lt,
        lb : req.body.lb,
        harga : req.body.harga,
        customer : req.body.customer
    });

    newObj.save((error) => {
        if (error){
            res.status(500).send(error);
        }
        else{
            res.json(newObj);
        }
    });
});

router.delete("/:id", (req, res) => {       
    Unit.findByIdAndRemove(req.params.id, (error, result) => {
        if(error){
            res.status(500).json(error);
        }
        else{
            res.json({ message : "Data deleted." });
        }
    });
});

router.put("/", (req, res) => {

    let newObj = {
        alamat : req.body.alamat,
        cluster : req.body.cluster,
        lt : req.body.lt,
        lb : req.body.lb,
        harga : req.body.harga,
        customer : req.body.customer
    };
    
    Unit.findByIdAndUpdate(req.body._id, newObj, (error, result) => {
        if(error){
            res.status(500).json({ message : "Error" });
        }
        else{
            res.json({ message : "Data updated." });
        }
    });

});

module.exports = (function(){
    return router;
})();