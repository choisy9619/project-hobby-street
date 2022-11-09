import React from 'react';
import styled from 'styled-components';
import Checkbox from '../components/common/Checkbox';
import TextInputField from '../components/common/TextInputField';

const InputFieldWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const CheckboxText = styled.div`
    margin-top: 2px;
    font-size: 12px;
`;

const ConditionText = styled.a`
    text-decoration: underline;
    cursor: pointer;
`;

const CTABtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
    gap: 10px;
    width: 374px;
    height: 49px;
    background-color: #ffdd5b;
    border-radius: 8px;
    font-size: 17px;
    font-weight: 600;
    line-height: 100%;
    text-align: center;
    color: #2e2c23;
    border: none;
    cursor: pointer;
`;

export interface SubmissionContainerProps {
    email: string;
    name: string;
    checked: boolean;
    nameError: string;
    emailError: string;
    checkboxError: string;
    onSubmit: () => void;
    onCheckChange: () => void;
    setOpenConditionModal: (arg: boolean) => void;
    onChangeName: (arg: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeEmail: (arg: React.ChangeEvent<HTMLInputElement>) => void;
}

const SubmissionContainer = ({
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
    const TermsMsg = (
        <>
            <CheckboxText>
                (필수){' '}
                <ConditionText onClick={() => setOpenConditionModal(true)}>
                    개인정보 수정 및 이용
                </ConditionText>
                에 동의합니다.
            </CheckboxText>
        </>
    );

    return (
        <>
            <InputFieldWrap>
                <TextInputField
                    placeholder="이메일 주소"
                    value={email}
                    onChange={onChangeEmail}
                    error={emailError || ''}
                />
                <TextInputField
                    placeholder="닉네임 또는 이름"
                    value={name}
                    onChange={onChangeName}
                    error={nameError || ''}
                />
                <Checkbox
                    checked={checked}
                    onChange={onCheckChange}
                    message={TermsMsg}
                    error={checkboxError || ''}
                />
            </InputFieldWrap>
            <CTABtn onClick={onSubmit}>구독하기</CTABtn>
        </>
    );
};

export default SubmissionContainer;
