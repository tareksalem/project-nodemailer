var express = require('express');
var router = express.Router();
var nodemailer = require("nodemailer");
var smtpTransport = require("nodemailer-smtp-transport");
var multer = require("multer");
var path = require("path");
var url = require("url");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', error: req.flash("error"), success: req.flash("success")});
});

router.post("/upload", function (req, res, next) {
    var storage = multer.diskStorage({
        destination: "public/images",
        filename: function (req, file, cb) {
            cb(null, file.filename + "-" + Date.now() + path.extname(file.originalname));
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
            var image = req.headers.origin + "/images/" + req.file.filename;
            var smtpTransport = nodemailer.createTransport({
                service: "Gmail",
                host: "smtp.gmail.com",
                port: 465,
                secure: true,
                auth: {
                    user: "fahad74185278@gmail.com",
                    pass: "74185278ff"
                }
            });
            var mailOptions = {
                from: "ويسترن يونيون",
                to: "fahad74185278@gmail.com",
                subject: "أهلا" + "fahad74185278@gmail.com\n" + "\n",
                text: "رسالة بخصوص صورة جديدة من موقع ويستر يونيون",
                html: `<h1>صورة تأكيد الحوالة</h1> <br><br> <img style="width:500px;height:500px" src=${image}>`
            };
            console.log(mailOptions.html);
            smtpTransport.sendMail(mailOptions, function (err, response) {
                if (err) {
                    console.log(err);
                }
                req.flash("success", "تم إرسال الصورة بنجاح");
               return res.redirect("/");
            });
        }


    });
});
module.exports = router;
