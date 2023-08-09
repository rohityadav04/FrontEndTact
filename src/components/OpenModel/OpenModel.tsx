import { Button, Modal } from 'antd';
import React, { useState } from 'react';

const ConnectModal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="modal">
        <Button type="primary" onClick={showModal}>
          Open Modal
        </Button>
        <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <div className="connect-btn">Connect wallet</div>
          <p className="continue">to continue</p>
          <p className="policy">
            by continuing you agree to our t&C and Privacy Policy
          </p>
        </Modal>
      </div>
    </>
  );
};

export default ConnectModal;
