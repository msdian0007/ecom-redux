import { Footer } from "../component/Footer";
import { Header } from "../component/Header";
import { Nav } from "../component/Nav";

export const DefaultLayout = ({ children }) => {
  return (
    <>
      <div className="main-page">
        <Header />
        <Nav />
        {children}
        <Footer />
      </div>
    </>
  );
};
