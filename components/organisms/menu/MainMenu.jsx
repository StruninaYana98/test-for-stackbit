import Dropdown from "../../molecules/dropdowns/Dropdown";

export default function MainMenu({ items }) {
  return (
    <div class="takui-c-main-menu">
      <div class="takui-c-site-width">
        <div class="takui-c-logo">
          <h1>Oncology</h1>
        </div>
        <nav class="takui-c-dropdowns-container">
          {items
            ? items.map((item, index) => (
                <div
                  key={index}
                  class={`takui-c-dropdown-container ${
                    item.isActive ? `is-active` : ``
                  }`}
                >
                  <Dropdown subject={item.subject} dropdownItems={item.dropdownItems}/>
                </div>
              ))
            : null}
        </nav>
      </div>
    </div>
  );
}
