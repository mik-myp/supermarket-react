import { Request, Response } from 'express';
import mockjs from 'mockjs';

const queryUserList = (req: Request, res: Response) => {
  const data = mockjs.mock({
    'list|100': [
      {
        'id|+1': 1,
        name: '@cname',
        'sex|1': ['男', '女'],
        age: '@integer(24, 40)',
        'telephone|+1': 17672819600,
        address: '@county(true)',
        remark: '@ctitle(3, 5)',
      },
    ],
  });
  res.json({
    data: data.list,
    code: 0,
    message: 'success',
  });
};

export default {
  'GET /api/userList': queryUserList,
};
