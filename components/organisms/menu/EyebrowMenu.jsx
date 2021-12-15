import SvgLogo from "../../atoms/icons/SvgLogo";
import HorizontalList from "../../molecules/lists/HorizontalList";
import Search from "../../molecules/search/Search";

export default function EyebrowMenu() {
  return (
    <div className="takui-c-eyebrow-menu">
      <div className="takui-c-site-width">
        <div className="takui-c-eyebrow-logo"><SvgLogo/></div>
        <div className="takui-c-links-container">
          <HorizontalList items={[{label:"item1", href:"#"},{label:"item2", href:"#"}, {label:"item3", href:"#"}]}/>
          <div className="takui-c-right-search"><Search/></div>
        </div>
      </div>
    </div>
  );
}
