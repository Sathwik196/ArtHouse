import React from "react";
import { Modal, Button } from "antd";
import "./index.scss";

const ModalComponent = ({
    modalOpen,
    setModalOpen,
    setStatus,
    status,
    sendStatus,
}) => {
    return (
        <>
            <Modal
                className="modal"
                title="Create a post"
                centered
                open={modalOpen}
                onOk={() => setModalOpen(false)}
                onCancel={() => setModalOpen(false)}
                footer={[
                    <Button
                        onClick={sendStatus}
                        key="submit"
                        type="primary"
                        className={`post-button ${
                            status.length > 0 ? "enabled" : "disabled"
                        }`}
                        disabled={status.length > 0 ? false : true}
                    >
                        Post
                    </Button>,
                ]}
            >
                <input
                    className="modal-input"
                    placeholder="What do you want to say?"
                    onChange={(event) => setStatus(event.target.value)}
                    value={status}
                />
            </Modal>
        </>
    );
};
export default ModalComponent;
