import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Abacaxi } from "../pages/home";
import { Jacare } from "../pages/home";

export const Rotas = () => {
    return (
        <> 
            <BrowserRouter>
                <Routes>
                    <Route path="/abacate" element={<Abacaxi />} />
                    <Route path="/Jacare" element={<Jacare />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}