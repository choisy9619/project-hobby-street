import React, { useState } from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import Checkbox from './components/common/Checkbox';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

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

const CheckboxWrap = styled.div`
    width: 335px;
    height: 40px;
    padding: 8px 0px;
    gap: 10px;
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

function App() {
    const [checked, setChecked] = useState<boolean>(false);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.checked);
    };

    return (
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
                        <InputField type="text" placeholder="이메일 주소" />
                        <InputField
                            type="text"
                            placeholder="닉네임 또는 이름"
                        />
                        <CheckboxInner>
                            <Checkbox
                                checked={checked}
                                onChange={handleChange}
                            />
                            (필수) 개인정보 수정 및 이용에 동의합니다.
                        </CheckboxInner>
                    </InputFieldWrap>
                    <CTABtn>구독하기</CTABtn>
                </UpperMainContent>
                <img
                    alt="hobby"
                    src="assets/gif/animation_1.gif"
                    height={260}
                    width={414}
                />
            </ContentWrap>
            <ContentWrap>
                <TextWrap>
                    <TextTitle>
                        몰랐던 그 취미의 매력을
                        <br />
                        우연히 발견해보세요
                    </TextTitle>
                    <TextDesc>
                        시작한 지 얼마 안 된 초보부터 고수까지,
                        <br />
                        그들은 어떤 다채로운 경험들을 마주했을까요?
                    </TextDesc>
                </TextWrap>
                <Carousel
                    autoPlay
                    interval={2000}
                    infiniteLoop
                    width={326}
                    showStatus={false}
                    showArrows={false}
                    showIndicators={false}
                    showThumbs={false}
                >
                    <div>
                        <img src="assets/images/card_1.svg" alt="카드1" />
                    </div>
                    <div>
                        <img src="assets/images/card_2.svg" alt="카드2" />
                    </div>
                    <div>
                        <img src="assets/images/card_3.svg" alt="카드3" />
                    </div>
                </Carousel>
            </ContentWrap>
            <ContentWrap>
                <TextWrap>
                    <TextTitle>
                        시작할 때 필요한 <br />
                        이런 저런 정보와 팁까지
                    </TextTitle>
                    <TextDesc>
                        나도 해보고싶단 생각이 든 분들을 위해,
                        <br />
                        시작을 위해 필요한 것도 함께 알려드려요
                    </TextDesc>
                </TextWrap>
                <img
                    alt="hobby"
                    src="assets/gif/animation_2.gif"
                    height={182}
                    width={414}
                />
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
                        <InputField type="text" placeholder="이메일 주소" />
                        <InputField
                            type="text"
                            placeholder="닉네임 또는 이름"
                        />
                        <CheckboxInner>
                            <Checkbox
                                checked={checked}
                                onChange={handleChange}
                            />
                            (필수) 개인정보 수정 및 이용에 동의합니다.
                        </CheckboxInner>
                    </InputFieldWrap>
                    <CTABtn>구독하기</CTABtn>
                </UpperMainContent>
            </ContentWrap>
            <ContentWrap>
                ⓒ 2022 하비스트릿 HobbyStreet All Rights Reserved.
            </ContentWrap>
        </Wrapper>
    );
}

export default App;
