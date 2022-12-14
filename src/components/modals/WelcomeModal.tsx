import React, { FC } from 'react';
import Modal from '../common/Modal';

interface WelcomeModalProps {
    name: string;
    onCloseWelcomeModal: () => void;
}

const WelcomeModal: FC<WelcomeModalProps> = ({ name, onCloseWelcomeModal }) => {
    return (
        <Modal
            title="πκ΅¬λν΄μ£Όμμ κ°μ¬ν©λλ€!"
            desc={`${name}λμκ² νμ λ©μΌμ λ³΄λ΄λλ Έμ΄μ. μ§κΈ λ°λ‘ νμΈν΄λ³΄μΈμ!`}
            buttonMsg="λ«κΈ°"
            onClickToggleModal={onCloseWelcomeModal}
        />
    );
};

export default WelcomeModal;
