import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styled from 'styled-components';
import { HOBBY_CARD_CONTENTS } from '../constants';
import HobbyCardWrap from '../components/cards/HobbyCardWrap';

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

const Examples = () => {
    return (
        <>
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
                {HOBBY_CARD_CONTENTS.map((item) => (
                    <HobbyCardWrap
                        key={item.id}
                        img={item.img}
                        title={item.title}
                        hobbyName={item.hobbyName}
                        bedge={item.bedge}
                        writer={item.writer}
                        explanation={item.explanation}
                    />
                ))}
            </Carousel>
        </>
    );
};

export default Examples;
