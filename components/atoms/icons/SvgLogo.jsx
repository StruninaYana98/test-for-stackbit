export default function SvgLogo({ hyperlinked, href, target, iconPath }) {
  if (hyperlinked) {
    return (
      <a href={href} target={target}>
        <svg className="takui-ico-svg takui-img--logo" aria-hidden="true"></svg>
      </a>
    );
  } else {
    return <svg className="takui-ico-svg takui-img--logo" aria-hidden="true"></svg>;
  }
}
