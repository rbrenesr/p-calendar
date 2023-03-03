import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth";
import { CalendarPage } from "../calendar";

export const AppRouter = () => {
  const authStatus = "not-authenticatede";

  return (
    <Routes>
      {        
        authStatus === "not-authenticated" ? (
          <Route path="/auth/*" element={<LoginPage />}></Route>
        ) : (
          <Route path="/*" element={<CalendarPage />}></Route>
        )
      }

      <Route path="/*" element={<Navigate to="/auth/login" />}></Route>
    </Routes>
  );
};
