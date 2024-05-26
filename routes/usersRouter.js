const express = require('express');
const router = express.Router();

router.get("/", function(req,res){
    res.send("Atif typed this user");
})

module.exports = router;