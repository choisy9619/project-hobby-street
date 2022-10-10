import React, { FC } from 'react';
import Modal from '../common/Modal';

interface ServerErrorModalProps {
    onCloseServerModal: () => void;
}

const ServerErrorModal: FC<ServerErrorModalProps> = ({
    onCloseServerModal,
}) => {
    return (
        <Modal
            onClickToggleModal={onCloseServerModal}
            title="서버 에러"
            desc="잠시 후 다시 시도해주세요."
            buttonMsg="닫기"
        />
    );
};

export default ServerErrorModal;
