import { extname } from 'path';
import { HttpException, HttpStatus } from '@nestjs/common';
import * as moment from 'moment';

export const imageFileFilter = (req, file, callback) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
    return callback(
      new HttpException(
        'Only image files are allowed!',
        HttpStatus.BAD_REQUEST,
      ),
      false,
    );
  }
  callback(null, true);
};
export const editFileName = (req, file, callback) => {
  const name = moment().utc().unix();
  const fileExtName = extname(file.originalname);
  callback(null, `${name}_${Math.random()}_${fileExtName}`);
};
