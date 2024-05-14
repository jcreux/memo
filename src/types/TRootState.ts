import store from "state/store";

type TRootState = ReturnType<typeof store.getState>;

export default TRootState;
