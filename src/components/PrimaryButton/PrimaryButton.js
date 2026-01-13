import './PrimaryButton.scss';

const PrimaryButton = ({ 
  children, 
  onClick, 
  variant = 'solid',
  size = 'medium',
  disabled = false,
  showLeadingIcon = false,
  showTrailingIcon = false,
  leadingIcon,
  trailingIcon
}) => {
  const sizeClass = {
    small: 'primary-btn--small',
    medium: 'primary-btn--medium',
    large: 'primary-btn--large',
    'extra-large': 'primary-btn--extra-large'
  }[size] || 'primary-btn--medium';

  const variantClass = {
    solid: 'primary-btn--solid',
    'outline-dark': 'primary-btn--outline-dark',
    'outline-light': 'primary-btn--outline-light',
    'ghost-dark': 'primary-btn--ghost-dark',
    'ghost-light': 'primary-btn--ghost-light'
  }[variant] || 'primary-btn--solid';

  return (
    <button 
      className={`primary-btn ${sizeClass} ${variantClass}`}
      onClick={onClick}
      disabled={disabled}
    >
      {showLeadingIcon && leadingIcon && (
        <span className="primary-btn__icon">{leadingIcon}</span>
      )}
      <span className="primary-btn__text">{children}</span>
      {showTrailingIcon && trailingIcon && (
        <span className="primary-btn__icon">{trailingIcon}</span>
      )}
    </button>
  );
};

export default PrimaryButton;
