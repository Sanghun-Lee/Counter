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

/*
 * 액션을 리듀서에 전달하기 위해서는 dispatch함수를 이용해야 한다.
 * dispatch(액션 객체)
 *
 * action생성자가 없을 때는
 * dispatch({type : 'INCREMENT'});
 * 이런식으로 액션객체를 dispatch함수 호출시에 바로 던져준다.
 * --------------------------------------------------------
 * 하지만 dispatch시에 만드는것 보다는 따로 파일로 만들어주는편이 좋다.
 * export const INCREMENT = 'INCREMENT';
 * export const increment = () => ({type : types.INCREMENT});
 * dispatch(actions.increment());
 *
 * // import * as types from './ActionTypes';
 * // import * as actions from './actions';
 */
