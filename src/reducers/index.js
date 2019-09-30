/*
 * Reducer만들기
 * 리듀서는 액션의 type에 따라 변화를 일으키는 함수이다.
 * 그래서 이 리듀서 파일에는 최초변화를 일으키기 전, 가지고 있어야 할 초기상태가 정의되어야 한다.
 */

import * as types from "../actions/ActionTypes";

// 초기상태 정의
const initialState = {
  color: "black",
  number: 0
};

// 리듀서 함수 작성
/*
 * 리듀서 함수는 state와 action을 파라미터로 가지는 함수
 * 그 내부에서 switch문을 통하여 action.type에 따라 상태에 다른 변화를 일으킨다.
 *
 * 단! state를 직접 수정하면 안되고, 지곤 state값에 덮어쓴 새 상태 객체를 만드는 방식이다.
 */

/* 
    리듀서 함수를 정의합니다. 리듀서는 state 와 action 을 파라미터로 받습니다.
    state 가 undefined 일때 (스토어가 생성될때) state 의 기본값을 initialState 로 사용합니다.
    action.type 에 따라 다른 작업을 하고, 새 상태를 만들어서 반환합니다.
    이 때 주의 할 점은 state 를 직접 수정하면 안되고,
    기존 상태 값에 원하는 값을 덮어쓴 새로운 객체를 만들어서 반환해야합니다.
*/

function counter(state = initialState, action) {
  switch (action.type) {
    case types.INCREMENT:
      return {
        ...state,
        number: state.number + 1
      };
    case types.DECREMENT:
      return {
        ...state,
        number: state.number - 1
      };
    case types.SET_COLOR:
      return {
        ...state,
        color: action.color
      };
    default:
      return state;
  }
}

export default counter;
