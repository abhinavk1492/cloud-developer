export const config = {
  "dev": {
    "username": "udagramkapuladev",
    "password": "udagramkapuladev",
    "database": "udagramkapuladev",
    "host": "udagramkapuladev.cufw7brhsxxp.us-east-1.rds.amazonaws.com",
    "dialect": "postgres",
    "aws_reigion": "us-east-1",
    "aws_profile": "default",
    "aws_media_bucket": "udagram-kapula-dev"
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  },
  "jwt": {
    "secret": process.env.JWT_SECRET
  }

}
