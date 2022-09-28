import React, { useState } from 'react';
import styled from 'styled-components';
import Checkbox from '../components/common/Checkbox';
import Modal from '../components/common/Modal';
import TextInputField from '../components/common/TextInputField';
import Examples from './Examples';
import Tips from './Tips';
import { ERROR_MESSAGE } from '../constants';

const Wrapper = styled.div`
    width: 414px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`;

const Header = styled.div`
    width: 375px;
    height: 68px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px 20px;
    gap: 10px;
    font-size: 20px;
    font-weight: 700;
    line-height: 100%;
    text-align: center;
    color: #2e2c23;
`;

const ContentWrap = styled.div`
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

const UpperMainContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
`;

const InputFieldWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const CheckboxInner = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 8px;

    width: 335px;
    height: 24px;
`;

const CheckboxText = styled.div`
    margin-top: 2px;
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
    cursor: pointer;
`;

const ConditionText = styled.a`
    text-decoration: underline;
    cursor: pointer;
`;

const MainContainer = () => {
    const [checked, setChecked] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [openWelcomeModal, setOpenWelcomeModal] = useState<boolean>(false);
    const [openConditionModal, setOpenConditionModal] =
        useState<boolean>(false);
    const [emailError, setEmailError] = useState<string>('');
    const [nameError, setNameError] = useState<string>('');

    function isValidEmail(email: string) {
        return /\S+@\S+\.\S+/.test(email);
    }

    const handleCheckChange = () => {
        setChecked(!checked);
    };

    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmailError('');
        setNameError('');
        const { value } = e.target;
        setEmail(value);
    };

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmailError('');
        setNameError('');
        const { value } = e.target;
        setName(value);
    };

    const handleSubmit = () => {
        if (email.length === 0 && name.length === 0) {
            setEmailError(ERROR_MESSAGE.EMPTY_EMAIL_ERROR);
            setNameError(ERROR_MESSAGE.EMPTY_NAME_ERROR);
            return;
        }

        if (email.length === 0) {
            setEmailError(ERROR_MESSAGE.EMPTY_EMAIL_ERROR);
            return;
        }

        if (name.length === 0) {
            setNameError(ERROR_MESSAGE.EMPTY_NAME_ERROR);
            return;
        }

        if (!isValidEmail(email)) {
            setEmailError(ERROR_MESSAGE.EMAIL_FORMAT_ERROR);
            return;
        }

        setOpenWelcomeModal(true);
    };

    const handleCloseWelcomeModal = () => {
        setOpenWelcomeModal(false);
        setEmail('');
        setName('');
        setChecked(false);
    };
    const handleCloseConditionModal = () => {
        setOpenConditionModal(false);
    };

    return (
        <>
            <Wrapper>
                <Header>Hobby Street</Header>
                <ContentWrap>
                    <TextWrap>
                        <TextTitle>그 취미, 나랑 맞을까?</TextTitle>
                        <TextDesc>
                            매 주 목요일, 다양한 취미 경험담을 들려드릴게요
                        </TextDesc>
                    </TextWrap>
                    <UpperMainContent>
                        <InputFieldWrap>
                            <TextInputField
                                placeholder="이메일 주소"
                                value={email}
                                onChange={handleChangeEmail}
                                error={emailError || ''}
                            />
                            <TextInputField
                                placeholder="닉네임 또는 이름"
                                value={name}
                                onChange={handleChangeName}
                                error={nameError || ''}
                            />
                            <CheckboxInner>
                                <Checkbox
                                    checked={checked}
                                    onChange={handleCheckChange}
                                />
                                <CheckboxText>
                                    (필수){' '}
                                    <ConditionText
                                        onClick={() =>
                                            setOpenConditionModal(true)
                                        }
                                    >
                                        개인정보 수정 및 이용
                                    </ConditionText>
                                    에 동의합니다.
                                </CheckboxText>
                            </CheckboxInner>
                        </InputFieldWrap>
                        <CTABtn onClick={handleSubmit}>구독하기</CTABtn>
                    </UpperMainContent>
                    <img
                        alt="hobby"
                        src="assets/gif/animation_1.gif"
                        height={260}
                        width={414}
                    />
                </ContentWrap>
                <ContentWrap>
                    <Examples />
                </ContentWrap>
                <ContentWrap>
                    <Tips />
                </ContentWrap>
                <ContentWrap>
                    <TextWrap>
                        <TextTitle>
                            해보기 전까진 모를 거에요
                            <br />
                            나에게 딱 맞는 취미일지
                        </TextTitle>
                    </TextWrap>
                    <UpperMainContent>
                        <InputFieldWrap>
                            <TextInputField
                                placeholder="이메일 주소"
                                value={email}
                                onChange={handleChangeEmail}
                                error={emailError || ''}
                            />
                            <TextInputField
                                placeholder="닉네임 또는 이름"
                                value={name}
                                onChange={handleChangeName}
                                error={nameError || ''}
                            />
                            <CheckboxInner>
                                <Checkbox
                                    checked={checked}
                                    onChange={handleCheckChange}
                                />
                                <CheckboxText>
                                    (필수){' '}
                                    <ConditionText
                                        onClick={() =>
                                            setOpenConditionModal(true)
                                        }
                                    >
                                        개인정보 수정 및 이용
                                    </ConditionText>
                                    에 동의합니다.
                                </CheckboxText>
                            </CheckboxInner>
                        </InputFieldWrap>
                        <CTABtn onClick={handleSubmit}>구독하기</CTABtn>
                    </UpperMainContent>
                </ContentWrap>
                <ContentWrap>
                    ⓒ 2022 하비스트릿 HobbyStreet All Rights Reserved.
                </ContentWrap>
            </Wrapper>
            {openWelcomeModal && (
                <Modal
                    title="🎉구독해주셔서 감사합니다!"
                    desc={`${name}님에게 전해드릴 이야기에 대한 좀 더 자세한 내용이 담긴 환영 메일을 보내드렸어요. 지금 바로 확인해보세요!`}
                    buttonMsg="메일함으로 이동하기"
                    onClickToggleModal={handleCloseWelcomeModal}
                    buttonColor="confirm"
                />
            )}
            {openConditionModal && (
                <Modal
                    onClickToggleModal={handleCloseConditionModal}
                    title="개인정보 수집 및 이용"
                    desc="이메일 뉴스레터 발송을 위해, 이메일 주소를 수집하고 이용합니다. 수집된 정보는 발송 외 다른 목적으로 이용되지 않으며, 서비스가 종료되거나 구독을 해지할 경우 즉시 삭제됩니다."
                    buttonMsg="닫기"
                />
            )}
        </>
    );
};

export default MainContainer;
