import React from 'react';
import styled from 'styled-components';
import Examples from '../Examples';
import Tips from '../Tips';

const Wrapper = styled.div`
    font-family: 'Pretendard';
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    margin-bottom: 40px;
`;

const MiddleContainer = () => {
    return (
        <div>
            <Wrapper>
                <Examples />
            </Wrapper>
            <Wrapper>
                <Tips />
            </Wrapper>
        </div>
    );
};

export default MiddleContainer;
