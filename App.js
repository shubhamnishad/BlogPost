
// import React,{useEffect} from 'react';
// import {
//   SafeAreaView,Text, View
// } from 'react-native';
// import {userBlog} from './store/actions'
// import BlogList from './Screen/BlogList'
// import { connect } from 'react-redux';
//  const App=(props) => {
//   useEffect(() => {
//    getApi()
//   }, [])
//   const getApi=()=>{
//     props.getBlog()
//   }
//   return (
//     <View>
//     <Text>hellovdmnvdsn d</Text>
//     </View>
//   );
// };

// function mapStateToProps(state) {
// 	const blogRow  = state;
// 	return blogRow;
// }

// const actionCreators = {
// 	getBlog: userBlog.getBlog
// };
// export default connect(mapStateToProps,  actionCreators )(App);


import React from 'react'
import { View, Text } from 'react-native'
// import Router from './MainNavigator/MainNavigator'
import { Provider } from 'react-redux'
import { store } from './store'
import { YellowBox} from "react-native";
import MainNavigator from './MainNavigator/MainNavigator'
YellowBox.ignoreWarnings(['VirtualizedLists should never be nested']);
YellowBox.ignoreWarnings(["Remote debugger"]);
export default function App() {
  return (
    <Provider store={store}>
      <MainNavigator></MainNavigator>
    </Provider>
  )
}

