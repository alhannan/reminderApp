import "./Fields.scss";

export const RenderInput = ({
  placeholder,
  className,
  onChange,
  labelActive,
  autoComplete,
  value,
  type,
  name,
  card,
  addButton,
}) => (
  <div className={`${card ? "field_container_row" : "field_container"}`}>
    <label htmlFor={name}>{labelActive && name}</label>
    <input
      autoComplete={autoComplete}
      placeholder={placeholder}
      className={className}
      onChange={onChange}
      value={value}
      type={type}
      name={name}
    />
    {addButton && <i className="fas fa-plus-circle fa-2x"></i>}
  </div>
);

export const SubmitButton = ({ onClick, ...otherProps }) => (
  <div className="field_container">
    <input type="submit" value="Submit" className="submit_btn" onClick={onClick} {...otherProps} />
  </div>
);

export const LogoutButton = ({ onClick, ...otherProps }) => (
  <div>
    <input type="submit" value="Logout" className="logout_btn" onClick={onClick} {...otherProps} />
  </div>
);
