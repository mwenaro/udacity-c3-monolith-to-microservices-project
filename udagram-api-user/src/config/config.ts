export const config = {
  'username': process.env.POSTGRES_USERNAME||"postgres",
  'password': process.env.POSTGRES_PASSWORD||"udapeople12",
  'database': process.env.POSTGRES_DB||"postgres",
  'host': process.env.POSTGRES_HOST||"udapeople.cngwfvqe9imi.us-east-1.rds.amazonaws.com",
  'dialect': 'postgres',
  'aws_region': process.env.AWS_REGION||"us-east-1",
  'aws_profile': process.env.AWS_PROFILE||"udacity-c3-user",
  'aws_media_bucket': process.env.AWS_BUCKET||"arn:aws:s3:::photobucket-28981100",
  'url': process.env.URL||"http://localhost:8100",
  'jwt': {
    'secret': process.env.JWT_SECRET||"testing",
  },
};
