import { Request, Response } from 'express';
import mockjs from 'mockjs';

const querySupplierList = (req: Request, res: Response) => {
  const data = mockjs.mock({
    'list|100': [
      {
        'id|+1': 1,
        name: '@cname',
        'telephone|+1': 17672819600,
        address: '@county(true)',
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
  'GET /api/supplierList': querySupplierList,
};
