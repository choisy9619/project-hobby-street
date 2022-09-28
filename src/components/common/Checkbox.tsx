import React from 'react';
import styled from 'styled-components';
import { ReactComponent as CheckIcon } from '../../assets/icons/checkbox.svg';

const CheckboxContainer = styled.div<{ checked: boolean }>`
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

interface CheckboxProps {
    checked: boolean;
    onChange: (arg: any) => void;
    label?: string | null;
}
export default function Checkbox({ checked, onChange, label }: CheckboxProps) {
    return (
        <CheckboxContainer checked={checked} onClick={onChange}>
            <Icon checked={checked} />
            {label != null ? <label>{label}</label> : null}
        </CheckboxContainer>
    );
}
