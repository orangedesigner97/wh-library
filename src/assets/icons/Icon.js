import React from 'react';
import './Icon.css';
import iconPlaceholder from './svg/icon placeholder.svg';

/**
 * Icon component wrapper for SVG icons
 * @param {string} src - Path to the SVG icon
 * @param {number} size - Size of the icon in pixels (10, 12, 14, 16, 18, 20, 24, 32, 36)
 * @param {string} color - Color of the icon (inherits by default)
 * @param {string} alt - Alternative text for accessibility
 */
const Icon = ({ src = iconPlaceholder, size = 16, color, alt = 'icon', className = '', ...props }) => {
  return (
    <span
      className={`wh-icon ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        ...(color && { color }),
      }}
      {...props}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </span>
  );
};

export default Icon;
