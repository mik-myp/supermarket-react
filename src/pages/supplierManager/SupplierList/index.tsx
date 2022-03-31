import React, { useRef } from 'react';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import request from 'umi-request';
import { PageContainer } from '@ant-design/pro-layout';

type GithubIssueItem = {
  id: number;
  name: string;
  telephone: number;
  address: string;
};

const columns: ProColumns<GithubIssueItem>[] = [
  {
    title: '供应商编号',
    dataIndex: 'id',
  },
  {
    title: '供应商名字',
    dataIndex: 'name',
  },
  {
    title: '供应商电话',
    dataIndex: 'telephone',
  },
  {
    title: '供应商地址',
    dataIndex: 'address',
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

const SupplierList = () => {
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
          }>('/api/supplierList', {
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
export default SupplierList;
