import List from "../../molecules/lists/List";

export default function MobileMenu({ logo, items, bottomLinks }) {
  return (
    <div class="takui-c-mobile-menu">
      <ul class="takui-c-mobile-menu-list">
        <li class="takui-c-mobile-menu-item">
          <div class="takui-c-mobile-menu-logo">
            <a href={logo.href}>{logo.text}</a>
          </div>
        </li>
        {items
          ? items.map((item, index) => (
              <li class="takui-c-mobile-menu-item" key={index}>
                <div class="takui-c-mobile-menu-subject">
                  <a href={item.href}>{item.subject.name}</a>
                </div>
              </li>
            ))
          : null}
      </ul>
      <div class="takui-c-mobile-links">
        <List items={bottomLinks} />
      </div>
    </div>
  );
}
