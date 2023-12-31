import { Route, Routes, BrowserRouter } from "react-router-dom";
import Index from "./pages";
import Create from "./pages/Create";
import View from "./pages/View";
import Store from "./store/store";
import Library from "./pages/Library";
import Favourites from "./pages/Favourites";

function App() {
  return (
    <Store>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="create" element={<Create />} />
          <Route path="library" element={<Library />} />
          <Route path="favourites" element={<Favourites />} />
          <Route path="view/:bookId" element={<View />} />
        </Routes>
      </BrowserRouter>
    </Store>
  );
}

export default App;
