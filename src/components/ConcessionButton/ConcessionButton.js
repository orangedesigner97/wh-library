import './ConcessionButton.scss';

const ConcessionButton = ({ 
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
    small: 'concession-btn--small',
    medium: 'concession-btn--medium',
    large: 'concession-btn--large',
    'extra-large': 'concession-btn--extra-large'
  }[size] || 'concession-btn--medium';

  const variantClass = {
    solid: 'concession-btn--solid',
    'outline-dark': 'concession-btn--outline-dark',
    'outline-light': 'concession-btn--outline-light',
    'ghost-dark': 'concession-btn--ghost-dark',
    'ghost-light': 'concession-btn--ghost-light'
  }[variant] || 'concession-btn--solid';

  return (
    <button 
      className={`concession-btn ${sizeClass} ${variantClass}`}
      onClick={onClick}
      disabled={disabled}
    >
      {showLeadingIcon && leadingIcon && (
        <span className="concession-btn__icon">{leadingIcon}</span>
      )}
      <span className="concession-btn__text">{children}</span>
      {showTrailingIcon && trailingIcon && (
        <span className="concession-btn__icon">{trailingIcon}</span>
      )}
    </button>
  );
};

export default ConcessionButton;
