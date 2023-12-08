const AWS=require("aws-sdk");
require("dotenv").config();

const s3Client=new AWS.S3({
    accessKeyId:process.env.AWS_ACCESS_KEY,
    secretAccessKey:process.env.AWS_SECRET_ACCESS_KEY,
    region:process.env.REGION,
});

const params={
    Bucket:process.env.BUCKET,
    Key:"",
    Body:null,
}

module.exports={s3Client, params};