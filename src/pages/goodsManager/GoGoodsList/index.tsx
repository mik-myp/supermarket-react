import React, { useRef } from 'react';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import request from 'umi-request';
import { PageContainer } from '@ant-design/pro-layout';

type GithubIssueItem = {
  typeId: number;
  typeName: string;
  id: number;
  name: string;
  price: number;
  stock: number;
  supplier: string;
};

const columns: ProColumns<GithubIssueItem>[] = [
  {
    title: '商品种类编号',
    dataIndex: 'typeId',
  },
  {
    title: '商品种类名字',
    dataIndex: 'typeName',
  },
  {
    title: '商品编号',
    dataIndex: 'id',
  },
  {
    title: '商品名字',
    dataIndex: 'name',
  },
  {
    title: '商品价格',
    dataIndex: 'price',
  },
  {
    title: '商品数量',
    dataIndex: 'stock',
  },
  {
    title: '商品供应商',
    dataIndex: 'supplier',
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

const GoGoodsList = () => {
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
          }>('/api/goodsList', {
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
export default GoGoodsList;
