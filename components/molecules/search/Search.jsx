import IconButton from "../../atoms/buttons/IconButton";
import InputText from "../../atoms/inputs/InputText";

export default function Search() {
  return (
    <div className="takui-search-box">
      <InputText/>
      <span className="takui-input-ico pos-right">
        <IconButton />
      </span>
    </div>
  );
}
