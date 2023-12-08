const router=require("express").Router();

const Filerouter=require("../routes/api/index");

router.use("/file", Filerouter);

module.exports=router;