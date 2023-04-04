import rootReducer from './reducer';
import { legacy_createStore as createStore } from "redux"
// import { persistStore } from "redux-persist";

const store = createStore(rootReducer);
// const store = configureStore({
//   reducer: rootReducer,
//   middleware: [ReduxThunk, logger],
//   devTools: true,
//   preloadedState: {
//     loading: {
//       loadingState: true,
//     },
//   },
// }); // redux store 정의

// export default store;
export default store;