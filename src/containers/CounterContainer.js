/*
 * 컨테이너 컴포넌트 만들기
 * 컨테이너 컴포넌트를 store와 연결하기 위해선 react-redux의 connect함수를 사용해야 한다.
 * connect(컴포넌트에 연결시킬 상태, action함수)
 * >>> 컴포넌트를 리덕스 스토어에 연결시키는 또 다른 함수를 반환한다.
 */

import Counter from "../components/Counter";
import * as actions from "../actions";
import { connect } from "react-redux";
import { getRandomColor } from "../utils";

// store안의 state값을 props로 연결해 줍니다.
// * 상태를 연결시킬때는 state를
const mapStateToProps = state => ({
  color: state.colorData.color,
  number: state.numberData.number
});

/*
    액션 생성자를 사용하여 액션을 생성하고,
    해당 액션을 dispatch하는 함수를 만든 후, 이를 props로 연결해 줍니다.
*/
// * action함수를 연결시킬땐 dispatch를 파라미터로 전달받는 함수를 만든다.
const mapDispatchToProps = dispatch => ({
  onIncrement: () => dispatch(actions.increment()), // 생성자
  onDecrement: () => dispatch(actions.decrement()), // decrement생성자
  onSetColor: () => {
    const color = getRandomColor();
    dispatch(actions.setColor(color));
  }
});

// Counter 컴포넌트의 Container 컴포넌트
// Counter 컴포넌트를 어플리케이션의 데이터 레이어와 묶는 역할을 합니다.
const CounterContainer = connect(
  mapStateToProps, // 컴포넌트에 연결시킬 상태(state)
  mapDispatchToProps // 액션 함수들
)(Counter);

export default CounterContainer;
