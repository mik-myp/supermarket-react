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

const AddAdmin = () => {
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
          label="编号"
          placeholder="请输入编号"
          rules={[{ required: true, message: '请输入编号' }]}
        />
        <ProFormText
          width="md"
          name="name"
          label="名字"
          placeholder="请输入名字"
          rules={[{ required: true, message: '请输入名字' }]}
        />
        <ProFormText
          width="md"
          name="password"
          label="密码"
          placeholder="请输入密码"
          rules={[{ required: true, message: '请输入密码' }]}
        />
        <ProFormText
          width="md"
          name="age"
          label="年龄"
          placeholder="请输入年龄"
          rules={[{ required: true, message: '请输入年龄' }]}
        />
        <ProFormRadio.Group
          name="sex"
          label="性别"
          width="md"
          placeholder="请选择性别"
          options={[
            {
              label: '男',
              value: '男',
            },
            {
              label: '女',
              value: '女',
            },
          ]}
          rules={[{ required: true, message: '请选择性别' }]}
        />
        <ProFormText
          width="md"
          name="telephone"
          placeholder="请输入电话"
          label="电话"
          rules={[{ required: true, message: '请输入电话' }]}
        />
        <ProFormText
          width="md"
          name="address"
          placeholder="请输入地址"
          label="地址"
          rules={[{ required: true, message: '请输入地址' }]}
        />
        <ProFormSelect
          name="department"
          width="md"
          label="职位"
          valueEnum={{
            职位一: '职位一',
            职位二: '职位二',
          }}
          placeholder="请选择职位"
          rules={[{ required: true, message: '请选择职位' }]}
        />
      </ProForm>
    </PageContainer>
  );
};

export default AddAdmin;
