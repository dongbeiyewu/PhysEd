import { usertable } from '@/services/ant-design-pro/api';
import type { ProColumns } from '@ant-design/pro-components';
import {
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
    title: '人员',
    dataIndex: 'name',
  },
  // {
  //   title: '组数',
  //   dataIndex: 'containers',
  // },
  // {
  //   title: '次数',
  //   dataIndex: 'containers',
  // },

  {
    title: '操作',
    key: 'option',
    valueType: 'option',
    render: () => [
      <a key="link">编辑</a>,
    ],
  },
];

const UserManageTable = (props) => {
  return (
    <ProTable<TableListItem>
      columns={columns}
      request={usertable}
      toolbar={{
        search: {
          onSearch: (value: string) => {
            alert(value);
          },
        },
        // filter: (
        //   <LightFilter>
        //     <ProFormDatePicker name="startdate" label="训练日" />
        //   </LightFilter>
        // ),
      }}
      rowKey="key"
      search={false}
    />
  );
};

export default UserManageTable;