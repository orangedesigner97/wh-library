import TextButton from './TextButton';
import Icon from '../../assets/icons';
import { iconMap, iconNames, getIcon } from '../../assets/icons/iconList';

export default {
  title: 'Components/TextButton',
  component: TextButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  render: ({ label, showLeadingIcon, showTrailingIcon, leadingIconName, trailingIconName, size, ...args }) => {
    // Determine icon size based on button size
    const iconSize = (size === 'large' || size === 'extra-large') ? 20 : 16;
    
    const leadingIconSrc = getIcon(leadingIconName);
    const trailingIconSrc = getIcon(trailingIconName);
    
    return (
      <TextButton 
        {...args}
        size={size}
        showLeadingIcon={showLeadingIcon && !!leadingIconSrc}
        showTrailingIcon={showTrailingIcon && !!trailingIconSrc}
        leadingIcon={leadingIconSrc ? <Icon src={leadingIconSrc} size={iconSize} /> : undefined}
        trailingIcon={trailingIconSrc ? <Icon src={trailingIconSrc} size={iconSize} /> : undefined}
      >
        {label}
      </TextButton>
    );
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'inverted'],
      description: 'Button variant style',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large', 'extra-large'],
      description: 'Button size',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    label: {
      control: 'text',
      description: 'Button text',
      defaultValue: 'Button',
    },
    showLeadingIcon: {
      control: 'boolean',
      description: 'Show leading icon',
    },
    showTrailingIcon: {
      control: 'boolean',
      description: 'Show trailing icon',
    },
    leadingIconName: {
      control: 'select',
      options: ['none', ...iconNames],
      description: 'Leading icon',
      if: { arg: 'showLeadingIcon', truthy: true },
    },
    trailingIconName: {
      control: 'select',
      options: ['none', ...iconNames],
      description: 'Trailing icon',
      if: { arg: 'showTrailingIcon', truthy: true },
    },
  },
};

// Default story
export const Default = {
  args: {
    variant: 'default',
    size: 'medium',
    label: 'Learn More',
    disabled: false,
    showLeadingIcon: false,
    showTrailingIcon: false,
    leadingIconName: 'none',
    trailingIconName: 'none',
  },
};

// Default variant
export const DefaultVariant = {
  args: {
    variant: 'default',
    size: 'medium',
    label: 'View Details',
    disabled: false,
    showLeadingIcon: false,
    showTrailingIcon: false,
  },
};

export const DefaultWithLeadingIcon = {
  args: {
    variant: 'default',
    size: 'medium',
    label: 'Download',
    disabled: false,
    showLeadingIcon: true,
    showTrailingIcon: false,
    leadingIconName: 'download',
  },
};

export const DefaultWithTrailingIcon = {
  args: {
    variant: 'default',
    size: 'medium',
    label: 'Learn More',
    disabled: false,
    showLeadingIcon: false,
    showTrailingIcon: true,
    trailingIconName: 'arrow-right',
  },
};

// Inverted variant (shown on dark background in Storybook)
export const Inverted = {
  args: {
    variant: 'inverted',
    size: 'medium',
    label: 'View Details',
    disabled: false,
    showLeadingIcon: false,
    showTrailingIcon: false,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const InvertedWithLeadingIcon = {
  args: {
    variant: 'inverted',
    size: 'medium',
    label: 'Download',
    disabled: false,
    showLeadingIcon: true,
    showTrailingIcon: false,
    leadingIconName: 'download',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const InvertedWithTrailingIcon = {
  args: {
    variant: 'inverted',
    size: 'medium',
    label: 'Learn More',
    disabled: false,
    showLeadingIcon: false,
    showTrailingIcon: true,
    trailingIconName: 'arrow-right',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

// Size variations
export const Small = {
  args: {
    variant: 'default',
    size: 'small',
    label: 'Small',
    disabled: false,
  },
};

export const Medium = {
  args: {
    variant: 'default',
    size: 'medium',
    label: 'Medium',
    disabled: false,
  },
};

export const Large = {
  args: {
    variant: 'default',
    size: 'large',
    label: 'Large',
    disabled: false,
  },
};

export const ExtraLarge = {
  args: {
    variant: 'default',
    size: 'extra-large',
    label: 'Extra Large',
    disabled: false,
  },
};

// Disabled state
export const Disabled = {
  args: {
    variant: 'default',
    size: 'medium',
    label: 'Disabled',
    disabled: true,
  },
};

// With both icons
export const WithBothIcons = {
  args: {
    variant: 'default',
    size: 'large',
    label: 'Download Report',
    disabled: false,
    showLeadingIcon: true,
    showTrailingIcon: true,
    leadingIconName: 'download',
    trailingIconName: 'arrow-right',
  },
};
