import AWS from 'aws-sdk';
import {v4 as uuidv4} from 'uuid';
import {Buffer} from 'buffer';
AWS.config.update({
  accessKeyId: 'AKIAQVWCUMEC62WL74BI',
  secretAccessKey: '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',
  region: '',
  signatureVersion: 'v4',
});

export const uploadToS3 = async function (data, fileName) {
  const s3 = new AWS.S3();

  const response = await s3
    .putObject({
      Key: `registrationVideo/${fileName}`,
      // ContentEncoding: 'base64',
      ContentType: 'video/mp4',
      Body: data,
      Bucket: 'videotofotos',
    })
    .promise();

  console.log(response);
};

export const uploadPhoto = async function (data) {
  //const fileName = uuidv4();
  const s3 = new AWS.S3();

  // console.log(fileName)

  const response = await s3
    .putObject({
      Key: 'groupImageForAttendance/3.jpg',
      ContentEncoding: 'base64',
      Bucket: 'videotofotos',
      Body: data,
    })
    .promise();

  console.log(response);
};
