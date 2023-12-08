const router=require("express").Router();
const upload=require("../../config/multer.config");
const uploadFile=require("../../library/upload");

router.post("/", upload.single("file"),async (req, res)=>{
    try{
        const url=await uploadFile(req.file, req.body, "fullstack");
        // console.log(url);
        res.json({
            url,
        });

    }catch{
        console.log(error);
        res.json(error);

    }
    
    res.send("Fileupload Api is working");
});

module.exports=router;
