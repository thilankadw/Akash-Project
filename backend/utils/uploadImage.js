const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const destinationPath = path.join(__dirname, 'public');
        cb(null, destinationPath);
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    },
});

const upload = multer({ storage: storage });

const uploadImage = async (req) => {
    return new Promise((resolve, reject) => {
      upload.single('imageFile')(req, null, function (err) {
        if (err instanceof multer.MulterError) {
          reject('Image upload error.');
        } else if (err) {
          console.error(err);
          reject('An error occurred during image upload. Try again.');
        }
        resolve(req.file ? req.file.filename : null);
      });
    });
};

module.exports = uploadImage;