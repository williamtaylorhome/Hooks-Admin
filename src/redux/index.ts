import { legacy_createStore as createStore, combineReducers, Store, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { applyMiddleware } from "redux";
import storage from "redux-persist/lib/storage";
import reduxThunk from "redux-thunk";
import reduxPromise from "redux-promise";
import global from "./modules/global/reducer";
import menu from "./modules/menu/reducer";
import tabs from "./modules/tabs/reducer";
import auth from "./modules/auth/reducer";
import breadcrumb from "./modules/breadcrumb/reducer";

// Create a reducer(Split reducer)
const reducer = combineReducers({
	global,
	menu,
	tabs,
	auth,
	breadcrumb
});

// redux persistence configuration
const persistConfig = {
	key: "redux-state",
	storage: storage
};
const persistReducerConfig = persistReducer(persistConfig, reducer);

// Open redux-devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Use redux middleware
const middleWares = applyMiddleware(reduxThunk, reduxPromise);

// Create a store
const store: Store = createStore(persistReducerConfig, composeEnhancers(middleWares));

// Create a persistent store
const persistor = persistStore(store);

export { store, persistor };
