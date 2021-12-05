import TopBar from './TopBar';
import Header from './Header';
import Footer from './Footer';



const Layout = ({ children }) =>(
    <>
    <TopBar />
    <Header />
    { children }
    <Footer />
    </>
) 
export default Layout;