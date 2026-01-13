import './TextButton.scss';

const TextButton = ({ 
  children, 
  onClick, 
  variant = 'default',
  size = 'medium',
  disabled = false,
  showLeadingIcon = false,
  showTrailingIcon = false,
  leadingIcon,
  trailingIcon
}) => {
  const sizeClass = {
    small: 'text-btn--small',
    medium: 'text-btn--medium',
    large: 'text-btn--large',
    'extra-large': 'text-btn--extra-large'
  }[size] || 'text-btn--medium';

  const variantClass = {
    default: 'text-btn--default',
    inverted: 'text-btn--inverted'
  }[variant] || 'text-btn--default';

  return (
    <button 
      className={`text-btn ${sizeClass} ${variantClass}`}
      onClick={onClick}
      disabled={disabled}
    >
      {showLeadingIcon && leadingIcon && (
        <span className="text-btn__icon">{leadingIcon}</span>
      )}
      <span className="text-btn__text">{children}</span>
      {showTrailingIcon && trailingIcon && (
        <span className="text-btn__icon">{trailingIcon}</span>
      )}
    </button>
  );
};

export default TextButton;
