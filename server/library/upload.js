const { s3Client, params } = require("../config/s3.config");
require("dotenv").config();

const uploadFile = (file, data, initName) => {
  return new Promise(async (resolve, reject) => {
    try {
      const extension = file.originalname.split(".").pop();
      let newFileName = `${data.fileName}.${extension}`;
      params.Key = `${initName ? initName : ""}/${data.folderName}/${newFileName}`;
      params.Body = file.buffer;

      s3Client.upload(params, (err, data) => {
        if (err) {
          return reject(err);
        }

        resolve({ url: data.Location });
      });
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = uploadFile;
