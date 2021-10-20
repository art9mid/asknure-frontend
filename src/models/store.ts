import { Store as ReduxStore } from "redux";
import { Persistor } from "redux-persist/es/types";

export type Store = {
  store: ReduxStore,
  persist: Persistor
}
