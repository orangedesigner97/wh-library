import React from 'react';
import './Icon.css';
import iconPlaceholder from './icons/svg/icon placeholder.svg';

/**
 * Icon component wrapper for SVG icons
 * @param {string} src - Path to the SVG icon
 * @param {number} size - Size of the icon in pixels (10, 12, 14, 16, 18, 20, 24, 32, 36)
 * @param {string} color - Color of the icon (inherits by default)
 * @param {string} alt - Alternative text for accessibility
 */
const Icon = ({ src = iconPlaceholder, size = 16, color = 'currentColor', alt = 'icon', className = '', ...props }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`wh-icon ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        display: 'inline-block',
        flexShrink: 0,
        filter: color !== 'currentColor' ? `brightness(0) saturate(100%)` : 'none',
      }}
      {...props}
    />
  );
};

export default Icon;
