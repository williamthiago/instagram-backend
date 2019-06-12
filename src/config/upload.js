const multer = require('multer');
const path = require('path');
const uuid = require('uuid/v4');

module.exports = {
    storage: new multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename: (req, file, callback) => {
            const { originalname } = file;
            const ext = path.extname(originalname);

            const name = `${uuid()}${ext}`;
            callback(null, name);
        }
    })
};