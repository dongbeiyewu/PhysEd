import { Request, Response } from 'express';

const getUser = (req: Request, res: Response) => {
  res.json({
    data: [
      {
        key: '000000001',
        name:'谢腾飞1',
        containers: '1',
        creator: '1',
      },
      {
        key: '000000002',
        name:'谢腾飞2',
        containers: '1',
        creator: '1',
      },
      {
        key: '000000003',
        name:'谢腾飞3',
        containers: '1',
        creator: '1',
      },
      {
        key: '000000004',
        name:'谢腾飞4',
        containers: '1',
        creator: '1',
      },
      {
        key: '000000005',
        name:'谢腾飞5',
        containers: '1',
        creator: '1',
      },
      {
        key: '000000006',
        name:'谢腾飞6',
        containers: '1',
        creator: '1',
      }
    ],
  });
};

export default {
  'GET /api/getUser': getUser,
};
