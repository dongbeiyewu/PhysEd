import { plan } from '@/services/ant-design-pro/api';
import { EllipsisOutlined } from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-components';
import {
  LightFilter,
  ProFormDatePicker,
  ProTable,
} from '@ant-design/pro-components';
// import rule from '@/services/ant-design-pro/api';



export type TableListItem = {
  key: number;
  name: string;
  containers: number;
  creator: string;
};

const columns: ProColumns<TableListItem>[] = [
  {
    title: '动作',
    dataIndex: 'name',
  },
  {
    title: '组数',
    dataIndex: 'containers',
  },
  {
    title: '次数',
    dataIndex: 'containers',
  },

  {
    title: 'RPE',
    key: 'option',
    valueType: 'option',
    render: () => [
      <a key="link">标记</a>,
    ],
  },
];

const Plan = (props) => {
  return (
    <ProTable<TableListItem>
      columns={columns}
      request={plan}
      toolbar={{
        search: {
          onSearch: (value: string) => {
            alert(value);
          },
        },
        filter: (
          <LightFilter>
            <ProFormDatePicker name="startdate" label="训练日" />
          </LightFilter>
        ),
      }}
      rowKey="key"
      search={false}
    />
  );
};

export default Plan;