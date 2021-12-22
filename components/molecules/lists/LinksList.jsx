import Link from "../../atoms/links/Link";

export default function LinksList({ items }) {
  return (
    <ul className="takui-ul">
      {items
        ? items.map((item, index) => (
            <li className={`takui-li-item ${item?.isActive ? `is-active` : ``}`} key={index}>
              <Link href={item?.href} target={item?.target}>
                {item?.text}
              </Link>
            </li>
          ))
        : null}
    </ul>
  );
}
