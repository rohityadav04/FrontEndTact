'use client';
import { StudentManagements } from '@/CompileCode/tact_StudentManagements';
import TonConnectSender from '@/components/TonConnectSender';
import { getHttpEndpoint } from '@orbs-network/ton-access';
import { Address, Sender, toNano } from '@ton/core';
import { TonClient } from '@ton/ton';
import { useTonConnectUI } from '@tonconnect/ui-react';
import { Button, Form, Input, notification } from 'antd';
import { useState } from 'react';
import Wallet from '../../Wallet/Wallet';
import s from './StudentManagement.module.scss';

type Props = {};

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const StudentManagement = (props: Props) => {
  const [tonConnector] = useTonConnectUI();

  const [val, setVal] = useState<null | number>();

  //get function

  const getData = async () => {
    let sender: Sender | null = null;
    sender = new TonConnectSender(tonConnector.connector);

    const endpoint = await getHttpEndpoint({
      network: 'testnet',
    });

    const client = new TonClient({ endpoint });

    // const sMContract = await StudentManagements.fromInit();
    const sMContract = StudentManagements.fromAddress(
      Address.parse('EQDanxf7Al156g-kzUyEnzuCxrUzrb-OxtGWevBeZ8d9NKQN')
    );

    const StudentManagement = client.open(sMContract);

    const value = await StudentManagement.getList();

    console.log('value', value);
  };

  // Update or increment function

  const updateData = async (values: {
    name: string;
    rollNo: string | number;
    className: string;
  }) => {
    const { name, rollNo, className } = values;
    let sender: Sender | null = null;
    sender = new TonConnectSender(tonConnector.connector);

    const endpoint = await getHttpEndpoint({
      network: 'testnet',
    });

    const client = new TonClient({ endpoint });

    const tactsM = client.open(await StudentManagements.fromInit());

    const updateResult = await tactsM.send(
      sender,
      {
        value: toNano('0.05'),
      },
      {
        $$type: 'Add',
        name: name,
        rollNo: BigInt(rollNo),
        class: className,
      }
    );

    console.log('updateResult', updateResult);
    notification.success({
      message: 'Success',
      description: 'student has been added to list',
      placement: 'topRight',
    });
  };

  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    updateData(values);
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
      <div className={s.root}>
        <div className="container">
          <Wallet />

          <div className="dataWrappper">
            <div className="form">
              {/* <button
                  onClick={() => {
                    updateData();
                  }}
                >
                  Add Student
                </button> */}
              <Form
                {...layout}
                form={form}
                name="basic"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  label="Name"
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your name!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Class"
                  name="className"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your class!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Roll No"
                  name="rollNo"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your roll number!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item {...tailLayout}>
                  <Button type="primary" htmlType="submit">
                    Add Student
                  </Button>
                </Form.Item>
              </Form>
            </div>
            <div className="buttonWrapper">
              <div className="getBtn">
                <button
                  onClick={() => {
                    getData();
                  }}
                >
                  Get List
                </button>
              </div>
            </div>

            <div className="value">Student List is {val}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentManagement;
