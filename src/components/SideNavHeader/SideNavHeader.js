import React from 'react';
import PropTypes from 'prop-types';
import './SideNavHeader.scss';
import Icon from '../../assets/icons/Icon';

/**
 * SideNavHeader Component
 * 
 * Header section for side navigation with logo, close/hamburger toggle, and optional user info.
 * Used as the top section of a side drawer or navigation panel.
 */
const SideNavHeader = ({
  title = 'William Hill',
  onMenuToggle,
  isOpen = false,
  showUserInfo = false,
  userName,
  variant = 'default', // 'default' | 'branded'
  className = '',
  ...props
}) => {
  const classes = [
    'side-nav-header',
    `side-nav-header--${variant}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <header className={classes} {...props}>
      <div className="side-nav-header__content">
        {/* Logo/Title */}
        <div className="side-nav-header__logo">
          <h1 className="side-nav-header__title">{title}</h1>
        </div>

        {/* User Info (Optional) */}
        {showUserInfo && userName && (
          <div className="side-nav-header__user">
            <Icon name="user" size={20} className="side-nav-header__user-icon" />
            <span className="side-nav-header__user-name">{userName}</span>
          </div>
        )}

        {/* Menu Toggle Button */}
        {onMenuToggle && (
          <button
            className="side-nav-header__toggle"
            onClick={onMenuToggle}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            type="button"
          >
            <Icon 
              name={isOpen ? 'close' : 'hamburger-nav'} 
              size={24}
              className="side-nav-header__toggle-icon"
            />
          </button>
        )}
      </div>
    </header>
  );
};

SideNavHeader.propTypes = {
  /** Title/Logo text */
  title: PropTypes.string,
  
  /** Menu toggle handler */
  onMenuToggle: PropTypes.func,
  
  /** Is navigation open/closed */
  isOpen: PropTypes.bool,
  
  /** Show user information section */
  showUserInfo: PropTypes.bool,
  
  /** User name to display */
  userName: PropTypes.string,
  
  /** Visual variant */
  variant: PropTypes.oneOf(['default', 'branded']),
  
  /** Additional CSS class */
  className: PropTypes.string
};

export default SideNavHeader;
