require("dotenv").config();

// Load the AWS SDK for Node.js
var AWS = require("aws-sdk");

const path = require("path");

// for the file upload functionality
const fs = require("fs");

// Set the region
AWS.config.update({ region: process.env.AWS_REGION });

// Get a random alphanumeric combination
const randomKeyGenerator = () => {
  return (
    Math.random().toString(36).substr(2, 3) +
    "-" +
    Math.random().toString(36).substr(2, 3) +
    "-" +
    Math.random().toString(36).substr(2, 4)
  );
};

// Create S3 service object
var s3 = new AWS.S3({ apiVersion: "2006-03-01" });

// Upload a file to the bucket. It returns a string with the file's key.
const uploadFile = async (fileData, fileName) => {
  try {
    const file = Buffer.from(fileData.replace(/^data:image\/\w+;base64,/, ""),'base64')
    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: `images/${randomKeyGenerator()}-${fileName}`,
      ContentEncoding: 'base64',
      Body: file,
    };
    const stored = await s3.upload(params).promise();
    return stored;
  } catch (e) {
    console.log(e);
  }
};

module.exports = { uploadFile };