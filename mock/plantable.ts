import { Request, Response } from 'express';

const getPlan = (req: Request, res: Response) => {
  res.json({
    data: [
      {
        key: '000000001',
        name:'531',
        containers: '1',
        creator: '1',
      },
      {
        key: '000000002',
        name:'德州',
        containers: '1',
        creator: '1',
      },
      {
        key: '000000003',
        name:'Starting Strength',
        containers: '1',
        creator: '1',
      },
      {
        key: '000000004',
        name:'Ice Cream Fitness 5×5',
        containers: '1',
        creator: '1',
      },
      {
        key: '000000005',
        name:'Candito直线',
        containers: '1',
        creator: '1',
      },
    ],
  });
};

export default {
  'GET /api/getPlan': getPlan,
};
