import React, { ChangeEventHandler } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;
`;

const InputField = styled.input<{ error?: string }>`
    width: 335px;
    border: ${({ error }) =>
        error ? '2px solid #DE665B' : '2px solid #efefef'};
    border-radius: 8px;
    padding: 16px;
    background: #ffffff;
    &:focus {
        outline: none;
        border: ${({ error }) =>
            error ? '2px solid #DE665B' : '2px solid #ffdd5b'};
    }
    &::placeholder {
        font-size: 14px;
        font-weight: 600;
        line-height: 100%;
        color: #8a8a8a;
    }
`;

const ErrorMsg = styled.div`
    font-weight: 600;
    font-size: 12px;
    line-height: 100%;
    color: #de665b;
`;

interface TextInputFieldProps {
    placeholder: string;
    value: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    error?: string;
}

const TextInputField: React.FC<TextInputFieldProps> = ({
    placeholder,
    value,
    onChange,
    error,
}) => {
    return (
        <Wrapper>
            <InputField
                type="text"
                placeholder={placeholder}
                value={value}
                error={error}
                onChange={onChange}
            />
            {error && <ErrorMsg>{error}</ErrorMsg>}
        </Wrapper>
    );
};

export default TextInputField;
