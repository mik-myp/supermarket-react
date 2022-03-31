import React, { useRef } from 'react';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import request from 'umi-request';
import { PageContainer } from '@ant-design/pro-layout';

type GithubIssueItem = {
  id: number;
  name: string;
  sex: {
    name: string;
  }[];
  age: number;
  telephone: number;
  address: string;
  department: string;
};

const columns: ProColumns<GithubIssueItem>[] = [
  {
    title: '编号',
    dataIndex: 'id',
  },
  {
    title: '名字',
    dataIndex: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
  },
  {
    title: '性别',
    dataIndex: 'sex',
    valueType: 'select',
    valueEnum: {
      man: { text: '男' },
      woman: { text: '女' },
    },
  },
  {
    title: '电话',
    dataIndex: 'telephone',
  },
  {
    title: '地址',
    dataIndex: 'address',
  },
  {
    title: '职位',
    dataIndex: 'department',
  },
  {
    title: '操作',
    valueType: 'option',
    key: 'option',
    render: (text, record, _, action) => [
      <a
        key="editable"
        onClick={() => {
          action?.startEditable?.(record.id);
        }}
      >
        编辑
      </a>,
      <a key="delete">删除</a>,
    ],
  },
];

const AdminList = () => {
  const actionRef = useRef<ActionType>();
  return (
    <PageContainer>
      <ProTable<GithubIssueItem>
        columns={columns}
        actionRef={actionRef}
        cardBordered
        request={async (params = {}, sort, filter) => {
          console.log(sort, filter);
          return request<{
            data: GithubIssueItem[];
          }>('/api/adminList', {
            params,
          });
        }}
        editable={{
          type: 'multiple',
        }}
        columnsState={{
          persistenceKey: 'pro-table-singe-demos',
          persistenceType: 'localStorage',
          onChange(value) {
            console.log('value: ', value);
          },
        }}
        rowKey="id"
        search={{
          labelWidth: 'auto',
        }}
        pagination={{
          pageSize: 5,
        }}
        dateFormatter="string"
      />
    </PageContainer>
  );
};
export default AdminList;
