import Link from "../../atoms/links/Link";

export default function Dropdown({ text, href, dropdownItems }) {
  return (
    <div className="takui-dropdown">
      <div className="takui-dropdown-subject">
        <Link href={href}>{text}</Link>
      </div>
      <div className="takui-dropdown-list-items">
        {dropdownItems
          ? dropdownItems.map((item, index) => (
              <div className="takui-dropdown-item" key={index}>         
                <Link href={item.href} target={item.target}>{item.text}</Link>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
