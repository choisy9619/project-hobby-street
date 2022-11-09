import React from 'react';
import styled from 'styled-components';
import SubmissionContainer, {
    SubmissionContainerProps,
} from '../SubmissionContainer';

const Wrapper = styled.div`
    font-family: 'Pretendard';
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    margin-bottom: 40px;
`;

const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;

const TextWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
`;

const TextTitle = styled.div`
    font-size: 33px;
    font-weight: 800;
    line-height: 150%;
    text-align: center;
    color: #2e2c23;
`;

const BottomContainer = ({
    email,
    name,
    checked,
    nameError,
    emailError,
    checkboxError,
    onSubmit,
    onCheckChange,
    setOpenConditionModal,
    onChangeName,
    onChangeEmail,
}: SubmissionContainerProps) => {
    return (
        <Wrapper>
            <TextWrap>
                <TextTitle>
                    해보기 전까진 모를 거에요
                    <br />
                    나에게 딱 맞는 취미일지
                </TextTitle>
            </TextWrap>
            <MainContent>
                <SubmissionContainer
                    name={name}
                    email={email}
                    checked={checked}
                    nameError={nameError}
                    emailError={emailError}
                    checkboxError={checkboxError}
                    onSubmit={onSubmit}
                    onChangeName={onChangeName}
                    onCheckChange={onCheckChange}
                    onChangeEmail={onChangeEmail}
                    setOpenConditionModal={setOpenConditionModal}
                />
            </MainContent>
        </Wrapper>
    );
};

export default BottomContainer;
