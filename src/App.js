import React, { useEffect } from "react";
import { Routes, Route, Router, BrowserRouter, useNavigate } from "react-router-dom";
import Admin from "./Admin";
import { ROLES } from "./constants";
import ProtectedRoute from "./hoc/ProtectedRoute";
import AdminLayout from "./layouts/AdminLayout";
import MainLayout from "./layouts/MainLayout";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import AuthService from "./services/authService";

function App() {
    return (
        <div className="app">
            <Routes>
                {/*Sadece admin rolüne sahip kullanıcının erişebileceği linkler */}
                <Route element={<ProtectedRoute roles={[ROLES.admin]} />}>
                    <Route path='admin/*' element={
                        <React.Suspense fallback={<p>...</p>}>
                            <Admin />
                        </React.Suspense>
                    } />
                </Route>

                <Route path='/' element={<MainLayout />}>
                    <Route exact path='' element={<HomePage />} />
                    <Route exact path='login' element={<LoginPage />} />
                </Route>

                {/* <Route path='unauthorized' element={<ErrorPage code="401" message="Bu sayfaya erişmek için lütfen giriş yapın" to="/auth/signin" text="Giriş yapmak için tıkla" />} />
                <Route path='forbidden' element={<ErrorPage code="403" message="Bu sayfayı görüntülemeye yetkiniz yok." />} /> */}
                <Route path='*' element={<ErrorPage code="404" message="Aradığın içerik bizde mevcut değil." />} />
            </Routes>
        </div>
    );
}

export default App;
