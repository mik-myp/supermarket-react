import { useRef } from 'react';
import { message } from 'antd';
import { ProFormInstance } from '@ant-design/pro-form';
import ProForm, { ProFormText } from '@ant-design/pro-form';
import { FooterToolbar, PageContainer } from '@ant-design/pro-layout';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const AddGoods = () => {
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
          label="商品种类编号"
          placeholder="请输入商品种类编号"
          rules={[{ required: true, message: '请输入商品种类编号' }]}
        />
        <ProFormText
          width="md"
          name="name"
          label="商品种类名字"
          placeholder="请输入商品种类名字"
          rules={[{ required: true, message: '请输入商品种类名字' }]}
        />
        <ProFormText
          width="md"
          name="id"
          label="商品编号"
          placeholder="请输入商品编号"
          rules={[{ required: true, message: '请输入商品编号' }]}
        />
        <ProFormText
          width="md"
          name="name"
          label="商品名字"
          placeholder="请输入商品名字"
          rules={[{ required: true, message: '请输入商品名字' }]}
        />
        <ProFormText
          width="md"
          name="password"
          label="商品价格"
          placeholder="请输入商品价格"
          rules={[{ required: true, message: '请输入商品价格' }]}
        />
        <ProFormText
          width="md"
          name="age"
          label="商品数量"
          placeholder="请输入商品价格"
          rules={[{ required: true, message: '请输入商品价格' }]}
        />

        <ProFormText
          width="md"
          name="telephone"
          placeholder="请输入商品供应商"
          label="商品供应商"
          rules={[{ required: true, message: '请输入商品供应商' }]}
        />
      </ProForm>
    </PageContainer>
  );
};

export default AddGoods;
