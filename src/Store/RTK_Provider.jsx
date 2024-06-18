"use client";
import { Provider } from "react-redux";
import store from "./store";

const RTK_Provider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default RTK_Provider;
