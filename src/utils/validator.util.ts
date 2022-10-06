// email 형식 검증 로직
export const isValidEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
};
