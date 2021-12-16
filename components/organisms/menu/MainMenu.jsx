import Dropdown from "../../molecules/dropdowns/Dropdown";

export default function MainMenu({ items }) {
  return (
    <div className="takui-c-main-menu">
      <div className="takui-c-site-width">
        <div className="takui-c-logo">
          <h1>Oncology</h1>
        </div>
        <nav className="takui-c-dropdowns-container">
          {items
            ? items.map((item, index) => (
                <div
                  key={index}
                  className={`takui-c-dropdown-container ${
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
