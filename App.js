import React from "react";
import { StyleSheet, View } from "react-native";

import Counter from "./src/components/Counter";
import CounterContainer from "./src/containers/CounterContainer";

/*
 * Store만들기
 * 스토어는 리덕스에서 가장 핵심적이고, 스토어 안에 현재 상태를 내장하고 있다.
 * 구독(subscribe)중인 함수들이 상태가 업데이트 될 때 마다 다시 실행하게 해준다.
 */
// Redux관련 불러오기
import { createStore } from "redux";
import reducers from "./src/reducers";
// Provider는 react-redux라이브러리의 리액트 앱에 store를 손쉽게 연동할 수 있도록 도와주는 컴포넌트이다.
import { Provider } from "react-redux";

// store생성
const store = createStore(reducers);

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <CounterContainer />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  }
});

/*
 * 리덕스를 이용하여 Counter만들기
 * https://velopert.com/3346 해당 블로그 참고
 */
