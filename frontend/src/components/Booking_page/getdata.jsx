import { Bookingheader } from "./Bookingheader";
import { Getdatacss } from "./Getdatacss";
import { Header } from "../SearchPage/Header";
// import { App } from "./gourav/App";
// import { Route, Routes } from "react-router-dom";
import { Final } from "./Final";
const Mytrip = () => {
  return (
    <div>
      <Header />
      <Getdatacss>
        <div className="main_div">
          <Bookingheader />
          <Final />
        </div>
      </Getdatacss>
    </div>
  );
};
export { Mytrip };
