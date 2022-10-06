import React from 'react';
import styled from 'styled-components';
import { ReactComponent as CheckIcon } from '../../assets/icons/checkbox.svg';

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 8px 0px;
    gap: 10px;
`;

const UpperWrap = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
`;

const IconWrap = styled.div<{ checked: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    gap: 10px;
    box-sizing: border-box;
    border: ${({ checked }) => (checked ? '' : '1.4px solid #2E2C23')};
    border-radius: 4px;
    background: ${({ checked }) => (checked ? '#FFDD5B' : '#FFFFFF')};
    cursor: pointer;
    & > label {
        display: inline-block;
        line-height: 16px;
    }
`;

const Icon = styled(CheckIcon)<{ checked: boolean }>`
    width: 23px;
    height: 10px;
    display: ${({ checked }) => (checked ? '' : 'none')};
`;

const ErrorMsg = styled.div`
    font-weight: 600;
    font-size: 12px;
    line-height: 100%;
    color: #de665b;
`;

interface CheckboxProps {
    checked: boolean;
    onChange: (arg: any) => void;
    message?: any;
    error?: string;
}
export default function Checkbox({
    checked,
    onChange,
    message,
    error,
}: CheckboxProps) {
    return (
        <Wrap>
            <UpperWrap>
                <IconWrap checked={checked} onClick={onChange}>
                    <Icon checked={checked} />
                </IconWrap>
                <div>{message}</div>
            </UpperWrap>
            {error && <ErrorMsg>{error}</ErrorMsg>}
        </Wrap>
    );
}
