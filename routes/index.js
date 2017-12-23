var express = require('express');
var router = express.Router();
var nodemailer = require("nodemailer");
var smtpTransport = require("nodemailer-smtp-transport");
var multer = require("multer");
var path = require("path");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', error: req.flash("error"), success: req.flash("success")});
});

router.post("/upload", function (req, res, next) {
    var storage = multer.diskStorage({
        destination: "public/images",
        filename: function (req, file, cb) {
            cb(null, file.originalname + "-" + Date.now() + path.extname(file.originalname));
        }
    });
    var upload = multer({
        storage: storage,
        limits: {fileSize: 1000000},
        fileFilter: function (req, file, cb) {
            checkFileType(file, cb);
        }
    }).single("uploadImg");
    function checkFileType(file, cb) {
        //allowed file types
        let fileTypes = /jpeg|jpg|png|gif/;
        let extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
        //check mime type of image
        let mimeType = fileTypes.test(file.mimetype);
        if (mimeType && extname) {
            return cb(null, true);
        } else {
            cb("تحميل صور فقط");
        }
    }

    upload(req, res, function (err) {
        console.log(req.file);
        if (req.file == undefined) {
            req.flash("error", "لم يتم اختيار صور");
            return res.redirect("/");
        }
        if (err) {
            console.log(err);
            req.flash("error", err);
            return res.redirect("/");
        } else {
            var image = "images/" + req.file.filename;
            console.log(image);
        }


    });
});
module.exports = router;
