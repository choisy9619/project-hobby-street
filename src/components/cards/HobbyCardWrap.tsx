import React, { FC } from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
    width: 326px;
    height: 386px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px;
    gap: 12px;
    background: #ffffff;
    box-shadow: 0px 3px 12px rgba(0, 0, 0, 0.07);
    border-radius: 8px;
    text-align: initial;
    font-family: 'Pretendard';
`;

const ContentWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;

    width: 294px;
    height: 302px;
`;

const ImgWrap = styled.div`
    width: 40px;
    height: 40px;
`;

const TitleWrap = styled.div`
    width: 294px;
    height: 54px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;
`;

const Title = styled.div`
    width: 294px;
    height: 26px;
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 150%;
    color: #2e2c23;
`;
const Desc = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    gap: 10px;

    width: 294px;
    height: 20px;
`;

const HobbyName = styled.p`
    height: 14px;
    font-weight: 600;
    font-size: 14px;
    line-height: 100%;

    color: #2e2c23;
`;

const WriterInfo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 4px;

    height: 20px;
`;

const Badge = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 6px;
    gap: 10px;

    height: 20px;

    background: #efefef;
    border-radius: 8px;

    font-weight: 600;
    font-size: 12px;
    line-height: 100.02%;
`;

const Writer = styled.p`
    width: 25px;
    height: 14px;

    font-weight: 600;
    font-size: 14px;
    line-height: 100%;

    text-align: center;

    color: #2e2c23;
`;

const ExplainWrap = styled.div`
    width: 294px;
    height: 228px;

    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    color: #2e2c23;
`;

interface HobbyCardWrapProps {
    img: string;
    title: string;
    hobbyName: string;
    bedge: string;
    writer: string;
    explanation: React.ReactNode | string;
}

const HobbyCardWrap: FC<HobbyCardWrapProps> = ({
    img,
    title,
    hobbyName,
    bedge,
    writer,
    explanation,
}) => {
    return (
        <Wrap>
            <ImgWrap>
                <img src={img} alt="카드 이미지" width="40px" height="40px" />
            </ImgWrap>
            <ContentWrap>
                <TitleWrap>
                    <Title>{title}</Title>
                    <Desc>
                        <HobbyName>{hobbyName}</HobbyName>
                        <WriterInfo>
                            <Badge>{bedge}</Badge>
                            <Writer>{writer}</Writer>
                        </WriterInfo>
                    </Desc>
                </TitleWrap>
                <ExplainWrap>{explanation}</ExplainWrap>
            </ContentWrap>
        </Wrap>
    );
};

export default HobbyCardWrap;
