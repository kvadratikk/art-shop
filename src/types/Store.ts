import AppSlice from '../store/reducers/AppSlice';
import { setupStore } from '../store/store';

export type RootState = ReturnType<typeof AppSlice.reducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
