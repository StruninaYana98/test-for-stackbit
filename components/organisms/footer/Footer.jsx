import Icon from "../../atoms/icons/Icon";
import SvgLogo from "../../atoms/icons/SvgLogo";
import IconLink from "../../atoms/links/IconLink";
import Link from "../../atoms/links/Link";
import LinksList from "../../molecules/lists/LinksList";

export default function Footer({footerLogo, mainNavigation, footerPrimaryLinks ,socialMediaLinks, footerCopyrightText}) {
  return (
    <div className="takui-c-footer">
      <div className="takui-c-top-section">
        <div className="takui-c-footer-top takui-c-site-width">
          <div className="takui-c-company-logo">
            <SvgLogo href={footerLogo?.href} target={footerLogo?.target} icon={footerLogo?.icon}/>
          </div>

          <div className="takui-c-footer-social">
            {socialMediaLinks
              ? socialMediaLinks.map((socialMediaLink, index) => (
                  <div className="social-icons" key={index}>
                    <Link href={socialMediaLink.href} target={socialMediaLink.target}>
                      <Icon icon={socialMediaLink.icon}/>
                    </Link>
                  </div>
                ))
              : null}
          </div>
          <nav
            role="navigation"
            className="takui-c-global-nav"
            aria-label="Global Navigation"
          >
            <ul className="takui-ul">
              {footerPrimaryLinks
                ? footerPrimaryLinks.map((primLink, index) => (
                    <li className="takui-li-item" key={index}>
                      <IconLink
                        href={primLink.href}
                        text={primLink.text}
                        target={primLink.target}
                        icon={primLink.icon}
                      />
                    </li>
                  ))
                : null}
            </ul>
          </nav>
        </div>
      </div>

      <div className="takui-c-bottom-section">
        <div className="takui-c-footer-bottom takui-c-site-width">
          {mainNavigation
            ? mainNavigation.map((mainNav, index) => (
                <LinksList
                  items={[
                    mainNav.mainLink,
                    ...mainNav.subNavigation,
                  ]}
                  key={index}
                />
              ))
            : null}
        </div>
        <div className="takui-c-footer-copy">
          <div className="copy-right-text takui-c-site-width">
            {footerCopyrightText}
          </div>
        </div>
      </div>
    </div>
  );
}
