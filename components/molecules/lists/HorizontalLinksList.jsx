import Link from "../../atoms/links/Link";

export default function HorizontaLinkslList({ items }) {
  return (
    <ul className="takui-ul-horizontal">
      {items
        ? items.map((item, index) => (
            <li className={`takui-li-item ${item?.isActive}`} key={index}>
              <Link href={item?.href} target={item?.target}>
                {item?.text}
              </Link>
            </li>
          ))
        : null}
    </ul>
  );
}
