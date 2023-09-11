import { Request, Response } from 'express';

const getPlan = (req: Request, res: Response) => {
  res.json({
    data: [
      {
        key: '000000001',
        name:'深蹲',
        containers: '1',
        creator: '1',
      },
      {
        key: '000000002',
        name:'深蹲',
        containers: '1',
        creator: '1',
      },
      {
        key: '000000003',
        name:'深蹲',
        containers: '1',
        creator: '1',
      },
      {
        key: '000000004',
        name:'深蹲',
        containers: '1',
        creator: '1',
      },
      {
        key: '000000005',
        name:'深蹲',
        containers: '1',
        creator: '1',
      },
      {
        key: '000000006',
        name:'深蹲',
        containers: '1',
        creator: '1',
      }
    ],
  });
};

export default {
  'GET /api/plan': getPlan,
};
