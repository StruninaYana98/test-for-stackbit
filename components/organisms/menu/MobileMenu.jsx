import Link from "../../atoms/links/Link";
import LinksList from "../../molecules/lists/LinksList";

export default function MobileMenu({ logo, items, bottomLinks }) {
  return (
    <div className="takui-c-mobile-menu">
      <ul className="takui-c-mobile-menu-list">
        <li className="takui-c-mobile-menu-item">
          <div className="takui-c-mobile-menu-logo">
            <Link href={logo?.href} target={logo?.target}>
              {logo?.text}
            </Link>
          </div>
        </li>
        {items
          ? items.map((item, index) => (
              <li className="takui-c-mobile-menu-item" key={index}>
                <div className="takui-c-mobile-menu-subject">
                  <Link
                    href={item?.mainLink?.href}
                    target={item?.mainLink?.target}
                  >
                    {item?.mainLink?.text}
                  </Link>
                </div>
              </li>
            ))
          : null}
      </ul>
      {bottomLinks ? (
        <div className="takui-c-mobile-links">
          <LinksList items={bottomLinks} />
        </div>
      ) : null}
    </div>
  );
}
