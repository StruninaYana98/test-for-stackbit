export default function List({ items }) {
  return (
    <ul class="takui-ul">
      {items
        ? items.map((item, index) => (
            <li class={`takui-li-item ${item.isActive ? `is-active` : ``}`}>
              <a href={item.href} target={item.target}>
                {item.label}
              </a>
            </li>
          ))
        : null}
    </ul>
  );
}
