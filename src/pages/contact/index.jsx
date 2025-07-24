import { Form, Input, Button } from "antd";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const Contact = () => {
  const [form] = Form.useForm();

  const handleFinish = (values) => {
    console.log("Message Sent:", values);
    toast.success("Message sent successfully!");
    form.resetFields();
  };

  return (
    <motion.div
      className="w-full px-4 md:px-6 lg:px-8 py-10 flex justify-center bg-white dark:bg-slate-900 transition-colors duration-300"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full max-w-2xl bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 sm:p-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">
          Contact Me
        </h2>

        <Form
          layout="vertical"
          onFinish={handleFinish}
          form={form}
          className="space-y-4"
        >
          <Form.Item
            name="name"
            label={<span className="text-gray-800 dark:text-white">Name</span>}
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input placeholder="Enter your name" />
          </Form.Item>

          <Form.Item
            name="email"
            label={<span className="text-gray-800 dark:text-white">Email</span>}
            rules={[{ required: true, type: "email", message: "Please enter a valid email" }]}
          >
            <Input placeholder="Enter your email address" />
          </Form.Item>

          <Form.Item
            name="message"
            label={<span className="text-gray-800 dark:text-white">Message</span>}
            rules={[{ required: true, message: "Please enter your message" }]}
          >
            <Input.TextArea rows={4} placeholder="Type your message..." />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="bg-blue-600 hover:bg-blue-700 h-12 text-base px-6 w-full"
            >
              Send Message
            </Button>
          </Form.Item>
        </Form>
      </div>
    </motion.div>
  );
};

export default Contact;
