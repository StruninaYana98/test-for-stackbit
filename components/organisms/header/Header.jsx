import React, { useState } from "react";
import Icon from "../../atoms/icons/Icon";
import SvgLogo from "../../atoms/icons/SvgLogo";
import Search from "../../molecules/search/Search";
import EyebrowMenu from "../menu/EyebrowMenu";
import MainMenu from "../menu/MainMenu";
import MobileMenu from "../menu/MobileMenu";

export default function Header({
  mainNavigation,
  headerPrimaryLinks,
  headerLogo,
  headerSearch,
}) {
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="takui-c-header header-sticky">
      <div className="takui-c-desktop-view">
        <div className="takui-c-first-row">
          <EyebrowMenu
            items={headerPrimaryLinks}
            logo={headerLogo}
            search={headerSearch}
          />
        </div>
        <div className="takui-c-second-row">
          <MainMenu items={mainNavigation} />
        </div>
      </div>
      <div
        className={`takui-c-mobile-view ${mobileSearchOpen ? `search` : ``} ${
          mobileMenuOpen ? `open` : ``
        }`}
        id="mobile-menu"
      >
        <div className="takui-c-top-nav">
          <div className="takui-c-logo">
            <SvgLogo
              href={headerLogo.href}
              target={headerLogo.target}
              icon={headerLogo.icon}
            />
          </div>
          <div
            className="takui-c-icon-search"
            onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
          >
            <Icon icon={headerSearch.icon} />
          </div>
          <div
            className="takui-ham-menu takui-c-hamburger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
            <Search
              label={null}
              inputId={headerSearch.inputId}
              placeholder={headerSearch.placeholder}
              autoComplete={headerSearch.autoComplete}
              icon={headerSearch.icon}
            />
          </div>
          <MobileMenu
            logo={{ href: "#", text: "Oncology" }}
            items={mainNavigation}
            bottomLinks={headerPrimaryLinks}
          />
        </div>
      </div>
    </header>
  );
}
