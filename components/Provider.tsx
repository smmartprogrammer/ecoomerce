"use client";
import { Toaster } from "react-hot-toast";
import { store } from "@/app/store/store";
import { Provider } from "react-redux";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      {children}
      <Toaster  />
    </Provider>
  );
};

export default Providers;
