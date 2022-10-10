import React, { FC } from 'react';
import Modal from '../common/Modal';

interface AlreadyExistModalProps {
    onCloseAlreadyExistModal: () => void;
}

const AlreadyExistModal: FC<AlreadyExistModalProps> = ({
    onCloseAlreadyExistModal,
}) => {
    return (
        <Modal
            onClickToggleModal={onCloseAlreadyExistModal}
            title="이미 구독중인 계정입니다."
            desc="메일함을 확인해주세요."
            buttonMsg="닫기"
        />
    );
};

export default AlreadyExistModal;
