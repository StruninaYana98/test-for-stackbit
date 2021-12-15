import EyebrowMenu from "../menu/EyebrowMenu";

export default function Header() {
  return (
    <header className="takui-c-header header-sticky">
      <div className="takui-c-desktop-view">
        <div className="takui-c-first-row"><EyebrowMenu/></div>
        <div className="takui-c-second-row">{"{>organism-c-main-menu}"}</div>
      </div>
      <div className="takui-c-mobile-view" id="mobile-menu">
        <div className="takui-c-top-nav">
          <div className="takui-c-logo">{"{> atoms-svg-logo }"}</div>
          <div className="takui-c-icon-search">{"{>atoms-icon}"}</div>
          <div className="takui-ham-menu takui-c-hamburger" data-menu="mobile-menu">
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
