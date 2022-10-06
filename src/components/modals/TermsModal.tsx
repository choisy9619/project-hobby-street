import React, { FC } from 'react';
import Modal from '../common/Modal';

interface TermsModalProps {
    onCloseConditionModal: () => void;
}

const TermsModal: FC<TermsModalProps> = ({ onCloseConditionModal }) => {
    return (
        <Modal
            onClickToggleModal={onCloseConditionModal}
            title="개인정보 수집 및 이용"
            desc="이메일 뉴스레터 발송을 위해, 이메일 주소를 수집하고 이용합니다. 수집된 정보는 발송 외 다른 목적으로 이용되지 않으며, 서비스가 종료되거나 구독을 해지할 경우 즉시 삭제됩니다."
            buttonMsg="닫기"
        />
    );
};

export default TermsModal;
