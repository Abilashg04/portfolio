import Header from '../Layout/Header';

const Layout=({children})=>{
    return(
        <>
        <Header />
        <div>{children}</div>
        </>
    );
};
export default Layout;