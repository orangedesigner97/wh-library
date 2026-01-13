import React from 'react';
import PropTypes from 'prop-types';
import './PrimaryButtonV2.scss';

/**
 * PrimaryButtonV2 Component
 * 
 * New implementation of Primary Button based on latest Figma design specs.
 * Simplified structure with clean, modern styling using William Hill design tokens.
 */
const PrimaryButtonV2 = ({
  children,
  variant = 'default',
  size = 'medium',
  disabled = false,
  onClick,
  type = 'button',
  className = '',
  ...props
}) => {
  const classes = [
    'primary-button-v2',
    `primary-button-v2--${variant}`,
    `primary-button-v2--${size}`,
    disabled && 'primary-button-v2--disabled',
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      <span className="primary-button-v2__label">
        {children}
      </span>
    </button>
  );
};

PrimaryButtonV2.propTypes = {
  /** Button label text */
  children: PropTypes.node.isRequired,
  
  /** Visual variant */
  variant: PropTypes.oneOf(['default', 'secondary', 'success', 'danger']),
  
  /** Button size */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  
  /** Disabled state */
  disabled: PropTypes.bool,
  
  /** Click handler */
  onClick: PropTypes.func,
  
  /** Button type */
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  
  /** Additional CSS class */
  className: PropTypes.string
};

export default PrimaryButtonV2;
