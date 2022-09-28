import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

const ModalContainer = styled.div`
    width: 414px;
    display: flex;
    align-items: center;
    margin: auto;
    justify-content: center;
`;

const ModalBox = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10000;
`;

const DialogBox = styled.div`
    width: 295px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 24px;
    gap: 28px;
    border: none;
    border-radius: 8px;
    box-shadow: 0px 3px 12px rgba(0, 0, 0, 0.07);
    box-sizing: border-box;
    background-color: #ffffff;
    z-index: 10000;
`;

const DialogInnerWrap = styled.div`
    width: 247px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 16px;
`;

const Title = styled.div`
    font-size: 26px;
    line-height: 150%;
    font-weight: 800;
    color: #2e2c23;
`;

const Description = styled.div`
    font-weight: 600;
    font-size: 17px;
    line-height: 150%;
    color: #2e2c23;
`;

const ModalBtn = styled.button<{ buttonColor: ColorType }>`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
    gap: 10px;
    width: 247px;
    height: 49px;
    background-color: ${({ buttonColor }) =>
        buttonColor === 'default' ? '#EFEFEF' : '#ffdd5b'};
    border-radius: 8px;
    font-size: 17px;
    font-weight: 600;
    line-height: 100%;
    text-align: center;
    color: #2e2c23;
    border: none;
    cursor: pointer;
`;

const Backdrop = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    z-index: 9999;
    background-color: rgba(46, 44, 35, 0.12);
`;

type ColorType = 'default' | 'confirm';

interface ModalDefaultType {
    onClickToggleModal: () => void;
    title: string;
    desc?: string;
    buttonMsg: string;
    buttonColor?: ColorType;
}

const Modal = ({
    onClickToggleModal,
    title,
    desc,
    buttonMsg,
    buttonColor = 'default',
}: PropsWithChildren<ModalDefaultType>) => {
    return (
        <ModalContainer>
            <ModalBox>
                <DialogBox>
                    <DialogInnerWrap>
                        <Title>{title}</Title>
                        <Description>{desc}</Description>
                        <ModalBtn
                            onClick={onClickToggleModal}
                            buttonColor={buttonColor}
                        >
                            {buttonMsg}
                        </ModalBtn>
                    </DialogInnerWrap>
                </DialogBox>
            </ModalBox>
            <Backdrop
                onClick={(e: React.MouseEvent) => {
                    e.preventDefault();

                    if (onClickToggleModal) {
                        onClickToggleModal();
                    }
                }}
            />
        </ModalContainer>
    );
};

export default Modal;
