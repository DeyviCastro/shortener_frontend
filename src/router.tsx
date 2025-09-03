import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginView } from "./views/LoginView";
import { RegisterView } from "./views/RegisterView";
import { AuthLayout } from "./layouts/AuthLayout";
import { AppLayout } from "./layouts/AppLayout";
import { Acortador } from "./views/Acortador";
import { ObtenerLinks } from "./views/ObtenerLinks";
import { Graphics } from "./views/Graphics";


export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<AuthLayout />}>
          <Route path="/auth/login" element={<LoginView />} />
          <Route path="/auth/register" element={<RegisterView />} />
        </Route>

        <Route path="/acortadorURL" element={<AppLayout />}>
          <Route index={true} element={<Acortador />} />
          <Route path="obtenerLinks" element={<ObtenerLinks />} />
          <Route path="graficos" element={<Graphics />} />
        </Route>


      </Routes>
    </BrowserRouter>
  )
}
