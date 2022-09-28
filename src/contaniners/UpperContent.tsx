import React from 'react';
import styled from 'styled-components';
import Checkbox from '../components/common/Checkbox';

const UpperMainContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
`;

const InputFieldWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
`;

const InputField = styled.input`
    width: 335px;
    height: 46px;
    border: 2px solid #efefef;
    border-radius: 8px;
    background: #ffffff;
    &:focus {
        outline: none;
        border: 2px solid #ffdd5b;
    }
`;

const CheckboxInner = styled.div`
    width: 335px;
    height: 24px;
    display: flex;
    align-items: center;
    gap: 8px;
    color: #2e2c23;
`;

const CTABtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
    gap: 10px;
    width: 335px;
    height: 49px;
    background-color: #ffdd5b;
    border-radius: 8px;
    font-size: 17px;
    font-weight: 600;
    line-height: 100%;
    text-align: center;
    color: #2e2c23;
    border: none;
`;

interface UpperContentProps {
    checked: boolean;
    handleChange: (e: any) => void;
}

const UpperContent: React.FC<UpperContentProps> = ({
    checked,
    handleChange,
}) => {
    return (
        <>
            <UpperMainContent>
                <InputFieldWrap>
                    <InputField type="text" placeholder="이메일 주소" />
                    <InputField type="text" placeholder="닉네임 또는 이름" />
                    <CheckboxInner>
                        <Checkbox checked={checked} onChange={handleChange} />
                        (필수) 개인정보 수정 및 이용에 동의합니다.
                    </CheckboxInner>
                </InputFieldWrap>
                <CTABtn>구독하기</CTABtn>
            </UpperMainContent>
            <img
                alt="hobby"
                src="src/assets/gif/animation_1.gif"
                height={260}
                width={414}
            />
        </>
    );
};

export default UpperContent;
