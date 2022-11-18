const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const userRoute = require('./routes/users');
const journalRoute = require('./routes/journals');
const authRoute = require('./routes/auth');
const multer = require("multer");
const path = require('path');

dotenv.config();

mongoose.connect(process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/journify_db',
{
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () =>
{
    console.log("Connected to database.");
});

app.use('/assets', express.static(path.join(__dirname, 'public/assets')));
app.use(express.static(path.resolve(__dirname, './client/build')));
app.get('*', function (req, res)
{
  response.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
})

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

const storage = multer.diskStorage
({
  destination: (req, file, cb) =>
  {
    cb(null, "public/assets");
  },
  filename: (req, file, cb) =>
  {
    cb(null, req.body.name);
  }
});

const upload = multer({storage});
app.post('/api/upload', upload.single("file"), (req, res) =>
{
  try
  {
    return res.status(200).json("File uploaded successfully.");
  }
  catch(err)
  {
    console.log(err);
  }
});

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/journals', journalRoute);

app.listen(8800, () =>
{
    console.log("Listening on port 8800.")
});