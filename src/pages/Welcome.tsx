import { PageContainer } from '@ant-design/pro-components';
import React from 'react';
import UserPlan from './Plan';


/**
 * 每个单独的卡片，为了复用样式抽成了组件
 * @param param0
 * @returns
 */


const Welcome: React.FC = () => {

  return (
    <><PageContainer /><UserPlan /></>

  );
};

export default Welcome;
