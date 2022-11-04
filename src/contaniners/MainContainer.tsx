import React, { useState } from 'react';
import styled from 'styled-components';
import Checkbox from '../components/common/Checkbox';
import TextInputField from '../components/common/TextInputField';
import Examples from './Examples';
import Tips from './Tips';
import { ERROR_MESSAGE } from '../constants';
import { isValidEmail } from '../utils/validator.util';
import WelcomeModal from '../components/modals/WelcomeModal';
import TermsModal from '../components/modals/TermsModal';
import axios from 'axios';
import ServerErrorModal from '../components/modals/ServerErrorModal';
import AlreadyExistModal from '../components/modals/AlreadyExistModal';
import addMember from '../api/mainApi';


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

const UpperMainContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;

const InputFieldWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const CheckboxText = styled.div`
    margin-top: 2px;
    font-size: 12px;
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

const ConditionText = styled.a`
    text-decoration: underline;
    cursor: pointer;
`;

const MainContainer = () => {
    const publicUrl = process.env.PUBLIC_URL;

    const [checked, setChecked] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [openWelcomeModal, setOpenWelcomeModal] = useState<boolean>(false);
    const [openConditionModal, setOpenConditionModal] =
        useState<boolean>(false);
    const [openAlreadyExistModal, setOpenAlreadyExistModal] =
        useState<boolean>(false);
    const [openServerErrorModal, setOpenServerErrorModal] =
        useState<boolean>(false);

    const [emailError, setEmailError] = useState<string>('');
    const [nameError, setNameError] = useState<string>('');
    const [checkboxError, setCheckboxError] = useState<string>('');

    const handleCheckChange = () => {
        setCheckboxError('');
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

    const connectToStibee = async () => {
        try {
            const response = await addMember({ email, name });
            console.log(response);
            // 주소록 추가 성공 시
            if (response.data.Value.success.length) {
                setOpenWelcomeModal(true);
                // 주소록에 이미 존재하는 email
            } else if (response.data.Value.failExistEmail.length) {
                setOpenAlreadyExistModal(true);
            } else {
                setOpenServerErrorModal(true);
            }
        } catch (e) {
            setOpenServerErrorModal(true);
        }
    };
    const handleSubmit = async () => {
        if (email.length === 0 && name.length === 0 && !checked) {
            setEmailError(ERROR_MESSAGE.EMPTY_EMAIL_ERROR);
            setNameError(ERROR_MESSAGE.EMPTY_NAME_ERROR);
            setCheckboxError(ERROR_MESSAGE.TERMS_CHECKBOX_ERROR);
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

        if (!checked) {
            setCheckboxError(ERROR_MESSAGE.TERMS_CHECKBOX_ERROR);
            return;
        }

        await connectToStibee();
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

    const handleCloseAlreadyExistModal = () => {
        setOpenAlreadyExistModal(false);
        setEmail('');
        setName('');
        setChecked(false);
    };

    const handleCloseServerErrorModal = () => {
        setOpenServerErrorModal(false);
    };

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
                            <Checkbox
                                checked={checked}
                                onChange={handleCheckChange}
                                message={TermsMsg}
                                error={checkboxError || ''}
                            />
                        </InputFieldWrap>
                        <CTABtn onClick={handleSubmit}>구독하기</CTABtn>
                    </UpperMainContent>
                    <img
                        alt="hobby"
                        src={publicUrl + '/assets/gif/animation_1.gif'}
                        height={260}
                        width={374}
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
                            <Checkbox
                                checked={checked}
                                onChange={handleCheckChange}
                                message={TermsMsg}
                                error={checkboxError || ''}
                            />
                        </InputFieldWrap>
                        <CTABtn onClick={handleSubmit}>구독하기</CTABtn>
                    </UpperMainContent>
                </ContentWrap>
                <ContentWrap>
                    ⓒ 2022 하비스트릿 HobbyStreet All Rights Reserved.
                </ContentWrap>
            </Wrapper>
            {openWelcomeModal && (
                <WelcomeModal
                    name={name}
                    onCloseWelcomeModal={handleCloseWelcomeModal}
                />
            )}
            {openConditionModal && (
                <TermsModal onCloseConditionModal={handleCloseConditionModal} />
            )}
            {openAlreadyExistModal && (
                <AlreadyExistModal
                    onCloseAlreadyExistModal={handleCloseAlreadyExistModal}
                />
            )}
            {openServerErrorModal && (
                <ServerErrorModal
                    onCloseServerModal={handleCloseServerErrorModal}
                />
            )}
        </>
    );
};

export default MainContainer;
