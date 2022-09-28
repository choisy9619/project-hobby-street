import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';

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

const MiddleContent: React.FC = () => {
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
        <div>
          <img src='src/assets/images/card_1.svg' alt='카드1' />
        </div>
        <div>
          <img src='src/assets/images/card_2.svg' alt='카드2' />
        </div>
        <div>
          <img src='src/assets/images/card_3.svg' alt='카드3' />
        </div>
      </Carousel>
    </>
  );
};

export default MiddleContent;
