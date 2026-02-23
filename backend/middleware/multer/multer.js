const multer = require('multer')
const cloudinary = require('../cloudinary/cloudinary')
const { CloudinaryStorage } = require('multer-storage-cloudinary')

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params:{
    folder: 'rooms_images',
    allowed_formats: ['jpeg', 'jpg', 'png'],
    resource_type: 'auto' 
  }
})

const upload = multer({storage})

module.exports = upload