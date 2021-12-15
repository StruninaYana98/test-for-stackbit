export default function InputText({
  label,
  input,
  inputId,
  placeholder,
  autoComplete,
}) {
  return (
    <div className="takui-form-group-input">
      {label ? (
        <label className="takui-label" for={label.id}>
          {label.text}
          {label.isRequired ? (
            <span className="takui-required-item">*</span>
          ) : null}
        </label>
      ) : null}
      <input
        type="text"
        className="takui-form-input"
        id={inputId}
        placeholder={placeholder}
        autocomplete={autoComplete}
      />
    </div>
  );
}
