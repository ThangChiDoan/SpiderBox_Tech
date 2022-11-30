import { ReactTable } from "pages/ReactTable";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

export const App = () => {
  return (
    <div className="App bg-slate-800 font-sans text-white">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/:id" element={<Home />} />
        </Route>
        <Route path="react-table" element={<ReactTable />} />
      </Routes>
    </div>
  );
};
