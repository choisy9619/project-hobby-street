import React from 'react';

export const ERROR_MESSAGE = {
    EMAIL_FORMAT_ERROR: '이메일 주소를 다시 확인해주세요.',
    EMPTY_EMAIL_ERROR: '이메일 주소를 입력해주세요.',
    EMPTY_NAME_ERROR: '닉네임 또는 이름을 입력해주세요.',
    TERMS_CHECKBOX_ERROR: '약관에 동의해주세요',
};

const publicUrl = process.env.PUBLIC_URL;

export const HOBBY_CARD_CONTENTS = [
    {
        id: 0,
        img: `${publicUrl}/assets/icons/puzzle.png`,
        title: '퍼즐을 맞추면서 총 두 번의 희열을 느껴요',
        hobbyName: '직소 퍼즐',
        bedge: '취미 부자',
        writer: '민수',
        explanation: (
            <>
                다들 한 번 씩 퍼즐 맞춰본 경험, 있지 않으신가요? 한 번도 안
                해보신 분이 계실 지도 모르겠네요.
                <br /> <br />
                어렸을 때 부터 저는 밖에 나가서 뛰어노는 것보단, 집에서 이것저것
                만들고 꼼지락대는 게 더 좋았어요. 커서는 뭐가 달라졌을까요? 물론
                밖에서 친구들 만나는 것도 좋아하지만, 여전히 저는 집이
                좋았습니다🙂
                <br /> <br />
                좋아하는 음악 틀어놓고, 편안하게 앉아 퍼즐 조각무더기에서 조각
                하나를 집어들기 시작하면 어느새 시간...
            </>
        ),
    },

    {
        id: 1,
        img: `${publicUrl}/assets/icons/cooking.png`,
        title: '제가 한 것 치곤 생각보다 맛있던데요?',
        hobbyName: '요리',
        bedge: '인기쟁이',
        writer: '근화',
        explanation: (
            <>
                맨날 집에서 해먹어야지, 해먹어야지 하면서 한 번도 제대로 해 먹은
                적이 없었어요. 그냥 배달 음식으로 뗴우거나 해봐야 밀키트 사서
                조리해먹는 정도였죠.
                <br /> <br />
                사실 레시피야 인터넷에 널려있고, 간단하게 해먹으려면 얼마든지 할
                수 있을 것 같긴 했어요. 근데 재료 준비하고 치우고 설거지할 거
                생각하니 막막했습니다. 어머니께 새삼 감사드리게 되네요.
                <br /> <br />
                이런 제가 갑자기 요리를 하나씩 하기 시작한 건 무슨..
            </>
        ),
    },

    {
        id: 2,
        img: `${publicUrl}/assets/icons/bicycle.png`,
        title: '바람 맞으며 달리는 그 기분을 아시나요?',
        hobbyName: '자전거 라이딩',
        bedge: '아직은초보',
        writer: '서영',
        explanation: (
            <>
                사실 저도 자전거 타는 걸 즐기기 시작한 지 얼마 되지 않았어요.
                심지어 어렸을 때 이후로 자전거를 타 본 적이 없었답니다.
                <br /> <br />
                언제는 그런 일이 있었어요. 퇴근하고 집까지 걸어가려는데,
                그날따라 너무 힘든 거 있죠. 그래서 무턱대로 역 앞에서 공유
                자전거를 빌렸어요.
                <br /> <br />
                바람을 가로지르며 페달을 밟는데, 그게 그렇게 상쾌할 줄은
                몰랐어요. 선선한 밤 공기 냄새와 얼굴을 스쳐지...
            </>
        ),
    },
];
