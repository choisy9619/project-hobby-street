import React from 'react';
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

const Tips = () => {
    const publicUrl = process.env.PUBLIC_URL;

    return (
        <>
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
                src={publicUrl + '/assets/gif/animation_2.gif'}
                height={182}
                width={374}
            />
        </>
    );
};

export default Tips;
