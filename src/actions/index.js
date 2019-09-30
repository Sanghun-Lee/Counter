/*
 * Action 생성자 만들기
 * 액션을 만드는 함수를 만든다.
 * 즉 액션 생성자를 만든다.
 */

/*
 * action 객체를 만드는 액션 생성자들을 선언합니다. (action creators)
 * 여기서 () => ({}) 은, function() { return { } } 와 동일한 의미입니다.
 * scope 이슈와 관계 없이 편의상 사용되었습니다.
 */

import * as types from "./ActionTypes";

export const increment = () => ({
  type: types.INCREMENT
});

export const decrement = () => ({
  type: types.DECREMENT
});

// 파라미터를 가지고있다.
export const setColor = color => ({
  type: types.SET_COLOR,
  color
});
