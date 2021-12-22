import Icon from "../icons/Icon";
import Link from "./Link";

export default function IconLink({ href, target, text, icon }) {
  return (
    <Link href={href} target={target} className="takui-link">
      {text}
      <Icon icon={icon}/>
    </Link>
  );
}
