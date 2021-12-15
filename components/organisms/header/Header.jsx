import EyebrowMenu from "../menu/EyebrowMenu";
import MainMenu from "../menu/MainMenu";

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
  return (
    <header className="takui-c-header header-sticky">
      <div className="takui-c-desktop-view">
        <div className="takui-c-first-row">
          <EyebrowMenu />
        </div>
        <div className="takui-c-second-row">
          <MainMenu items={menuItems} />
        </div>
      </div>
      <div className="takui-c-mobile-view" id="mobile-menu">
        <div className="takui-c-top-nav">
          <div className="takui-c-logo">{"{> atoms-svg-logo }"}</div>
          <div className="takui-c-icon-search">{"{>atoms-icon}"}</div>
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
          {"{>organism-c-mobile-menu}"}
        </div>
      </div>
    </header>
  );
}
