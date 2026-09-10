import '../Styles/Header.css'

function Header(){
    return(
        <>
        <header className='header'>
            <div className='header-container'>
                <div className='logo'>
                    ABILASH <span>G</span>
                </div>

                <nav className='nav'>
                    <a href='#home'>Home</a>
                    <a href='#about'>About</a>
                    <a href='#skills'>Skills</a>
                    <a href='#projects'>Projects</a>
                    <a href='#contact'>Contact</a>
                </nav>

                <a href='#contact' className='hire-btn'>
                    Hire me
                </a>
            </div>
        </header>
        </>
    )
}
export default Header;