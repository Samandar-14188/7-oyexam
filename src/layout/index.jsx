import Header from "../utils/header";
import Footer from "../utils/footer";
import { Outlet } from "react-router";
import AudiophilePage from "../utils/audiophile/index";
export default function Layout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <AudiophilePage />
      <Footer />
    </div>
  );
}