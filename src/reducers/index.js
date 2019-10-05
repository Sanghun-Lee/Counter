/*
 * Reducer만들기
 *
 * 리듀서 함수는 dispatch를 통해서 action이 전달되면 이전의 state도 같이 매개변수로 전달받는다.
 * 그리고 새로운 state를 리턴한다.
 */

import * as types from "../actions/ActionTypes"; // 상수로 정의했던 액션타입들

// 초기상태 정의
// 스토어가 생성될 때 리듀서가 호출되는데, 그 때 state는 undefined상태이다.
// 그래서 초기 state값인 initialState를 선언해서 리듀서에 넣어주어야 한다.

// const initialState = {
//   color: "black",
//   number: 0
// };

// 리듀서 함수 작성
/*
 * 리듀서 함수는 state와 action을 파라미터로 가지는 함수
 * 그 내부에서 switch문을 통하여 action.type에 따라 상태에 다른 변화를 일으킨다.
 *
 * 단! state를 직접 수정하면 안되고, 기존 state값에 덮어쓴 새 상태 객체를 만드는 방식이다.
 */

// 현재(이전의) state와 action을 받는다. action객체에는 type이란 이름의 key가 꼭 들어간다.
// 그리고 리듀서 함수 (여기서는 count)가 리턴하는 값이 새로운 state가 된다.

// function counter(state = initialState, action) {
//   switch (action.type) {
//     case types.INCREMENT:
//       return {
//         ...state,
//         number: state.number + 1
//       };
//     case types.DECREMENT:
//       return {
//         ...state,
//         number: state.number - 1
//       };
//     case types.SET_COLOR:
//       return {
//         ...state,
//         color: action.color
//       };
//     default:
//       return state;
//   }
// }

// export default counter;

/*----------------------------------------------------------------*/
/* number color와 같이 기존 리듀서를 분리시키자.  */
import number from "./number";
import color from "./color";

// * combineReducer로 number, color의 서브 리듀서를 합칠 수 있다.
import { combineReducer } from "redux";

/*
 * 서브 리듀서를 하나로 합친다.
 * combineReducers를 실행하고 나면, 나중에 store의 형태가 파라미터로 전달한 객체의 모양대로 만들어진다.
 * 지금의 경우 :
 * {
 *   numberData : {
 *     number : 0
 *   },
 *   colorData : {
 *     color : 'black';
 *   }
 * }
 *
 * 으로 만들어집니다.
 */

const reducers = combineReducer({
  numberData: number,
  colorData: color
});

export default reducers;
