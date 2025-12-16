import { BrowserRouter, Routes, Route } from "react-router-dom";
import Abacaxi from "../pages/home";

export const Rotas = () => {
    return (
        <> {/* Fragment */}
            <BrowserRouter>
                <Routes>
                    <Route path="/abacate" element={<Abacaxi />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}