// Redux/Zustand store 初始化示例
// 这里以 Redux Toolkit 为例
import { configureStore } from '@reduxjs/toolkit';
// import userReducer from './slices/userSlice';

const store = configureStore({
  reducer: {
    // user: userReducer,
  },
});

export default store;
