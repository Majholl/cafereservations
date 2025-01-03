const path = require("path");
const multer = require("multer");

module.exports = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "..", "public", "categories", "images"));
  },
  filename: (req, file, cb) => {
    const fileName = Date.now() + String(Math.random() * 9999);
    const ext = path.extname(file.originalname);

    const validMimeTypes = ["image/jpg", "image/jpeg", "image/png"];

    if (validMimeTypes.includes(file.mimetype)) {
      cb(null, `${fileName}${ext}`);
    } else {
      cb(new Error("Only .jpg | .jpeg | .png"));
    }
  },
});
