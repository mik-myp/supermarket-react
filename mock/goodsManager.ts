import { Request, Response } from 'express';
import mockjs from 'mockjs';

const queryGoodsList = (req: Request, res: Response) => {
  const data = mockjs.mock({
    'list|100': [
      {
        'typeId|+1': 0o1,
        typeName: '@ctitle',
        'id|+1': 1,
        name: '@ctitle',
        price: '@integer(0, 200)',
        stock: '@integer(0, 1000)',
        'telephone|+1': 17672819600,
        supplier: '@cname',
      },
    ],
  });
  res.json({
    data: data.list,
    code: 0,
    message: 'success',
  });
};
const queryGoodsTypeList = (req: Request, res: Response) => {
  const data = mockjs.mock({
    'list|100': [
      {
        'typeId|+1': 0o1,
        typeName: '@ctitle',
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
  'GET /api/goodsList': queryGoodsList,
  'GET /api/goodsTypeList': queryGoodsTypeList,
};
