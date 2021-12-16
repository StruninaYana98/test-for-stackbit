import Icon from "../../atoms/icons/Icon";
import SvgLogo from "../../atoms/icons/SvgLogo";
import EyebrowMenu from "../menu/EyebrowMenu";
import MainMenu from "../menu/MainMenu";
import MobileMenu from "../menu/MobileMenu";

export default function Header() {
  const menuItems = [
    {
      isActive: true,
      subject: {
        name: "MenuItem1",
        href: "#",
      }
    },
    {
      subject: {
        name: "MenuItem2",
        href: "#",
      }
    },
    {
      subject: {
        name: "MenuItem3",
        href: "#",
      }
    },
    {
      subject: {
        name: "MenuItem4",
        href: "#",
      }
     
    },
  ];
  const menuLinks=[
    {label:"item1", href:"#"},{label:"item2", href:"#"}, {label:"item3", href:"#"}
  ]
  return (
    <header className="takui-c-header header-sticky">
      <div className="takui-c-desktop-view">
        <div className="takui-c-first-row">
          <EyebrowMenu items={menuLinks}/>
        </div>
        <div className="takui-c-second-row">
          <MainMenu items={menuItems} />
        </div>
      </div>
      <div className="takui-c-mobile-view" id="mobile-menu">
        <div className="takui-c-top-nav">
          <div className="takui-c-logo"><SvgLogo/></div>
          <div className="takui-c-icon-search"><Icon/></div>
          <div
            className="takui-ham-menu takui-c-hamburger"
            data-menu="mobile-menu"
          >
            <div className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div className="takui-c-mobile-search-and-menu">
          <div className="takui-c-mobile-search">
            {"{>molecules-search iconPath=mobileIcon}"}
          </div>
          <MobileMenu logo={{href:"#", text:"Oncology"}} items={menuItems} bottomLinks={menuLinks}/>
        </div>
      </div>
    </header>
  );
}
