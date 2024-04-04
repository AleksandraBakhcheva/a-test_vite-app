import "./Header.scss";
import Media from "../../utils/Media";
import Nav from "../Nav/Nav";
import welbexLogo from "../../assets/images/welbex-logo.svg";
import welbex from "../../assets/images/welbex.svg";
import tgIcon from "../../assets/images/telegram-icon.svg";
import vbIcon from "../../assets/images/viber-icon.svg";
import whatsAppIcon from "../../assets/images/whatsApp-icon.svg";

export default function Header() {
  const { mobileVersion } = Media();

  return (
    <header>
      <div className="header">
        <div className="header__box">
          <div className="purple-light"></div>
          {mobileVersion ? (
            <Nav />
          ) : (
            <>
              <div className="header__logo">
                <div className="header__icons">
                  <div className="red-ball"></div>
                  <img src={welbexLogo} alt="welbex-logo" />
                  <img src={welbex} alt="welbex" />
                </div>
                <div className="header__slogan">
                  <p>
                    крупный интегратор CRM <br /> в Росcии и ещё 8 странах
                  </p>
                </div>
              </div>
              <Nav />
              <div className="header__contacts">
                <div className="purple-ball"></div>
                <span className="phone">+7 555 555-55-55</span>
                <div className="contact-apps">
                  <img src={tgIcon} alt="tg-icon" />
                  <img src={vbIcon} alt="vb-icon" />
                  <img src={whatsAppIcon} alt="whatsApp-icon" />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
