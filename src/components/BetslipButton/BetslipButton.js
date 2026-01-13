import './BetslipButton.scss';

const BetslipButton = ({ 
  children, 
  onClick, 
  variant = 'add',
  size = 'medium',
  disabled = false,
  showLeadingIcon = false,
  showTrailingIcon = false,
  leadingIcon,
  trailingIcon
}) => {
  const sizeClass = {
    small: 'betslip-btn--small',
    medium: 'betslip-btn--medium',
    large: 'betslip-btn--large',
    'extra-large': 'betslip-btn--extra-large'
  }[size] || 'betslip-btn--medium';

  const variantClass = {
    add: 'betslip-btn--add',
    remove: 'betslip-btn--remove'
  }[variant] || 'betslip-btn--add';

  return (
    <button 
      className={`betslip-btn ${sizeClass} ${variantClass}`}
      onClick={onClick}
      disabled={disabled}
    >
      {showLeadingIcon && leadingIcon && (
        <span className="betslip-btn__icon">{leadingIcon}</span>
      )}
      <span className="betslip-btn__text">{children}</span>
      {showTrailingIcon && trailingIcon && (
        <span className="betslip-btn__icon">{trailingIcon}</span>
      )}
    </button>
  );
};

export default BetslipButton;
