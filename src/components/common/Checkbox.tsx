import React from 'react';
import styled from 'styled-components';
import { ReactComponent as CheckIcon } from '../../assets/icons/checkbox.svg';

const CheckboxContainer = styled.div`
    display: flex;
    align-items: center;
    & > label {
        display: inline-block;
        line-height: 16px;
    }
`;
const CheckBox = styled.div<{ checked: boolean }>`
    width: 16px;
    height: 16px;
    border: 1px solid gray;
    display: inline-block;
    background: ${({ checked }) => (checked ? 'yellow' : 'gray')};
    cursor: pointer;
    & > svg {
        position: absolute;
    }
`;

interface CheckboxProps {
    checked: boolean;
    onChange: (arg: any) => void;
    label?: string | null;
}
export default function Checkbox({ checked, onChange, label }: CheckboxProps) {
    return (
        <CheckboxContainer>
            <CheckBox checked={checked} onClick={onChange}>
                <CheckIcon width="16px" height="16px" />
            </CheckBox>
            {label != null ? <label>{label}</label> : null}
        </CheckboxContainer>
    );
}
