import homeIcon from '../icons/home.svg';
import portfolioIcon from '../icons/portfolio.svg';
import forumIcon from '../icons/forum.svg';
import settingsIcon from '../icons/settings.svg';

const Navbar = () => {

  return (
    <div className="navbar medium flex justify-between"
      style={{
        padding: "8px 16px",
        fontSize: 12,
        borderTop: "1px solid #9EAE9B",
        backgroundColor: "#FFF",
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: "10000",
      }}>
      <div className="icon flex flex-col items-center"
        style={{
          width: 72,
        }}>
        <img src={homeIcon} alt=""/>
      Beranda
      </div>
      <div className="icon flex flex-col items-center"
        style={{
          width: 72,
        }}>
        <img src={portfolioIcon} alt=""/>
      Portfolio
      </div>
      <div className="icon flex flex-col items-center"
        style={{
          width: 72,
        }}>
        <img src={forumIcon} alt=""/>
      Forum
      </div>
      <div className="icon flex flex-col items-center"
        style={{
          width: 72,
        }}>
        <img src={settingsIcon} alt=""/>
      Pengaturan
      </div>
    </div>
  )

}

Navbar.defaultProps = {

}

export default Navbar;
