import Icon from "../icons/Icon";

export default function IconButton({ ariaLabel, disabled }) {
  return (
    <button
      aria-label={ariaLabel}
      disabled={disabled}
      className="takui-btnicon-inverted"
    >
      <Icon />
    </button>
  );
}
