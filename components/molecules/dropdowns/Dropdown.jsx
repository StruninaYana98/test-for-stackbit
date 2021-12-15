export default function Dropdown({ subject, dropdownItems }) {
  return (
    <div class="takui-dropdown">
      <div class="takui-dropdown-subject">
        <a href={subject.href}>{subject.name}</a>
      </div>
      <div class="takui-dropdown-list-items">
        {dropdownItems
          ? dropdownItems.map((item, index) => (
              <div class="takui-dropdown-item" key={index}>
                <a href={item.href}>{item.name}</a>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
