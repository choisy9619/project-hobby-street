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

const TextDesc = styled.div`
    font-size: 17px;
    font-weight: 600;
    line-height: 150%;
    text-align: center;
    color: #2e2c23;
`;

const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;

const TopContainer = ({
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
    const publicUrl = process.env.PUBLIC_URL;

    return (
        <Wrapper>
            <TextWrap>
                <TextTitle>그 취미, 나랑 맞을까?</TextTitle>
                <TextDesc>
                    매 주 목요일, 다양한 취미 경험담을 들려드릴게요
                </TextDesc>
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
            <img
                alt="hobby"
                src={publicUrl + '/assets/gif/animation_1.gif'}
                height={260}
                width={374}
            />
        </Wrapper>
    );
};

export default TopContainer;
