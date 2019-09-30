/*
 * ActionType 준비하기
 * 모든 액션 객체는 type이라는 값을 가지고 있어야 한다.
 * * type : 액션의 이름과 같은 존재
 * 액션 값들은 항상 문자열로 있는것 보다는 변수를 이용하는편이 좋다.
 * 그리고 그 변수들이 모여있는 파일을 만들어서 그곳에 넣어두는편이 좋다.
 *
 * 그래서 해당 파일은 액션들의 type을 정의한다.
 */

/*
 * export를 붙임으로서, 나중에 이 변수들을 불러올 때
 * import * as types from './ActionTypes'를 할 수 있다.
 */
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const SET_COLOR = "SET_COLOR";
