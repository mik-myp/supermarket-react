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

const AddDepartment = () => {
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
          label="职位编号"
          placeholder="请输入编号"
          rules={[{ required: true, message: '请输入编号' }]}
        />
        <ProFormText
          width="md"
          name="name"
          label="职位名字"
          placeholder="请输入名字"
          rules={[{ required: true, message: '请输入名字' }]}
        />

        <ProFormText
          width="md"
          name="telephone"
          placeholder="请输入电话"
          label="职位电话"
          rules={[{ required: true, message: '请输入电话' }]}
        />
        <ProFormText
          width="md"
          name="address"
          placeholder="请输入地址"
          label="职位地址"
          rules={[{ required: true, message: '请输入地址' }]}
        />
      </ProForm>
    </PageContainer>
  );
};

export default AddDepartment;
