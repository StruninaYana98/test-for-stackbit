import Icon from "../icons/Icon";
import Link from "../links/Link";

export default function OutlineButtonIcon({ href, target, text, icon }) {
  return (
    <Link
      href={href}
      target={target}
      role="button"
      className="takui-btn-outline-icon"
    >
      {text}
      <Icon icon={icon} />
    </Link>
  );
}
