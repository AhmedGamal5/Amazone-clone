import { createContext, useContext, useReducer} from "react";
import AppReducer from "./AppReducer";
import { initialState } from "./AppReducer";

const GlobalContext = createContext();

const Globalprovider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <GlobalContext.Provider
      value={{ user: state.user, basket: state.basket, dispatch: dispatch }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default Globalprovider;
export const useAuth = () => {
  return useContext(GlobalContext);
};
