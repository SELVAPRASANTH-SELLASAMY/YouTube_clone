import './css/App.css';
import logo from './icons/youtube-logo.svg';
import hamburger from './icons/hamburger.svg';
import search from './icons/search-icon.svg';
import mic from './icons/microphone.svg';
import create from './icons/create.svg';
import notify from './icons/notify.svg';
import profile from './icons/profile.svg';
function Menu()
{
    return(
        <>
        <div className="top-menu">
            <div className="menu">
                <div className="hamburger-menu">
                    <img src={hamburger} alt="hamburger-icon" />
                </div>
                <div className="youtube-logo">
                    <p className="tm">IN</p>
                    <img src={logo} alt="youtube" />
                </div>
                <div className="search">
                    <input type="text" placeholder="Search"/>
                    <div className="search-icon-onfocus">
                        <img src={search} alt="search-icon" />
                    </div>
                    <div className="search-icon">
                        <img src={search} alt="search-icon" />
                        <p className="what-is-it">Search</p>
                    </div>
                    <div className="microphone">
                        <img src={mic} alt="voice-search" />
                        <p className="what-is-it">Search with your voice</p>
                    </div>
                </div>
                <div className="right-corner-menu">
                        <div className="create">
                            <img src={create} alt="create" />
                            <p className="what-is-it">Create</p>
                        </div>
                        <div className="notify">
                            <p className="notification-count">1</p>
                            <img src={notify} alt="notifications" />
                            <p className="what-is-it">Notifications</p>
                        </div>
                        <div className="profile">
                            <img src={profile} alt="profile" />
                        </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default Menu;