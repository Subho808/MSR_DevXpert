import React, { useState } from 'react';
import { Button, Form, Input, Select, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';


const { Option } = Select;

const ApplyNow = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Submitted:', values);
        message.success('Application submitted successfully!');
        form.resetFields();
    };

    return (
        <section className="apply-now-section">
            <div className="apply-now-container">
                <h1 className="gradient-title"><span>Apply</span> Now</h1>
                <p className="section-subtitle">Submit your details and we’ll get in touch with you soon.</p>

                <Form layout="vertical" form={form} onFinish={onFinish} className="apply-form">
                    <Form.Item label="Full Name" name="name" rules={[{ required: true, message: 'Please enter your name' }]}>
                        <Input placeholder="John Doe" />
                    </Form.Item>

                    <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email', message: 'Enter a valid email' }]}>
                        <Input placeholder="you@example.com" />
                    </Form.Item>

                    <Form.Item label="Phone Number" name="phone" rules={[{ required: true, message: 'Please enter your phone number' }]}>
                        <Input placeholder="+91-XXXXXXXXXX" />
                    </Form.Item>

                    <Form.Item label="Position Applied For" name="position" rules={[{ required: true, message: 'Please select a position' }]}>
                        <Select placeholder="Select a role">
                            <Option value="Frontend Developer">Frontend Developer</Option>
                            <Option value="Backend Developer">Backend Developer</Option>
                            <Option value="UI/UX Designer">UI/UX Designer</Option>
                            <Option value="Other">Other</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item label="Upload Resume" name="resume" valuePropName="fileList" getValueFromEvent={e => Array.isArray(e) ? e : e?.fileList}>
                        <Upload beforeUpload={() => false}>
                            <Button icon={<UploadOutlined />}>Click to Upload</Button>
                        </Upload>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" size="large">Submit Application</Button>
                    </Form.Item>
                </Form>
            </div>
        </section>
    );
};

export default ApplyNow;
