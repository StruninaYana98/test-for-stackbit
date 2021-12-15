export default function HorizontalList({ items }) {
  return (
    <ul className="takui-ul-horizontal">
      {items
        ? items.map((item, index) => (
            <li className={`takui-li-item ${item.isActive}`} key={index}>
              <a href={item.href} target={item.target}>
                {item.label}
              </a>
            </li>
          ))
        : null}
    </ul>
  );
}
