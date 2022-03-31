import React, { useRef } from 'react';
import { message, TreeSelect } from 'antd';
import { ProFormInstance, ProFormRadio } from '@ant-design/pro-form';
import { ProFormCascader } from '@ant-design/pro-form';
import ProForm, {
  ProFormText,
  ProFormDateRangePicker,
  ProFormSelect,
  ProFormMoney,
  ProFormDigit,
  ProFormTreeSelect,
} from '@ant-design/pro-form';
import { FooterToolbar, PageContainer } from '@ant-design/pro-layout';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const AddGoodsType = () => {
  const formRef = useRef<
    ProFormInstance<{
      id?: number;
      name?: string;
      password?: string;
      age?: number;
      sex?: string;
      telephone?: number;
      address?: string;
      department?: string;
    }>
  >();
  return (
    <PageContainer>
      <ProForm
        style={{ margin: '50px 0  0 100px' }}
        layout="horizontal"
        onFinish={async (values) => {
          await waitTime(2000);
          console.log(values);
          const val1 = await formRef.current?.validateFields();
          console.log('validateFields:', val1);
          const val2 = await formRef.current?.validateFieldsReturnFormatValue?.();
          console.log('validateFieldsReturnFormatValue:', val2);
          message.success('提交成功');
        }}
        formRef={formRef}
        params={{ id: '100' }}
        formKey="base-form-use-demo"
        dateFormatter={(value, valueType) => {
          console.log('---->', value, valueType);
          return value.format('YYYY/MM/DD HH:mm:ss');
        }}
        request={async () => {
          await waitTime(100);
          return {
            sex: '男',
          };
        }}
        autoFocusFirstInput
        labelCol={{ span: 2 }}
        submitter={{
          render: (_, dom) => <FooterToolbar>{dom}</FooterToolbar>,
        }}
      >
        <ProFormText
          width="md"
          name="id"
          label="商品类型编号"
          placeholder="请输入商品类型编号"
          rules={[{ required: true, message: '请输入商品类型编号' }]}
        />
        <ProFormText
          width="md"
          name="name"
          label="商品类型名字"
          placeholder="请输入商品类型名字"
          rules={[{ required: true, message: '请输入商品类型名字' }]}
        />
      </ProForm>
    </PageContainer>
  );
};

export default AddGoodsType;
