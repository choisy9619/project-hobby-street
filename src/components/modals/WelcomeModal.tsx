import React, { FC } from 'react';
import Modal from '../common/Modal';

interface WelcomeModalProps {
    name: string;
    onCloseWelcomeModal: () => void;
}

const WelcomeModal: FC<WelcomeModalProps> = ({ name, onCloseWelcomeModal }) => {
    return (
        <Modal
            title="🎉구독해주셔서 감사합니다!"
            desc={`${name}님에게 환영 메일을 보내드렸어요. 지금 바로 확인해보세요!`}
            buttonMsg="닫기"
            onClickToggleModal={onCloseWelcomeModal}
        />
    );
};

export default WelcomeModal;
