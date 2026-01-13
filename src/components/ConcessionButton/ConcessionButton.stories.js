import ConcessionButton from './ConcessionButton';
import Icon from '../../assets/icons';
import { iconMap, iconNames, getIcon } from '../../assets/icons/iconList';

export default {
  title: 'Components/ConcessionButton',
  component: ConcessionButton,
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
      <ConcessionButton 
        {...args}
        size={size}
        showLeadingIcon={showLeadingIcon && !!leadingIconSrc}
        showTrailingIcon={showTrailingIcon && !!trailingIconSrc}
        leadingIcon={leadingIconSrc ? <Icon src={leadingIconSrc} size={iconSize} /> : undefined}
        trailingIcon={trailingIconSrc ? <Icon src={trailingIconSrc} size={iconSize} /> : undefined}
      >
        {label}
      </ConcessionButton>
    );
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'outline-dark', 'outline-light', 'ghost-dark', 'ghost-light'],
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
    variant: 'solid',
    size: "small",
    label: 'Claim Offer',
    disabled: false,
    showLeadingIcon: false,
    showTrailingIcon: false,
    leadingIconName: 'none',
    trailingIconName: 'none',
  },
};

// Solid variants
export const Solid = {
  args: {
    variant: 'solid',
    size: 'medium',
    label: 'Boost',
    disabled: false,
    showLeadingIcon: false,
    showTrailingIcon: false,
  },
};

export const SolidWithLeadingIcon = {
  args: {
    variant: 'solid',
    size: 'medium',
    label: 'Special Offer',
    disabled: false,
    showLeadingIcon: true,
    showTrailingIcon: false,
    leadingIconName: 'bell',
  },
};

export const SolidWithTrailingIcon = {
  args: {
    variant: 'solid',
    size: 'medium',
    label: 'View Offers',
    disabled: true,
    showLeadingIcon: true,
    showTrailingIcon: true,
    trailingIconName: 'arrow-right',
  },
};

// Outline Dark variants
export const OutlineDark = {
  args: {
    variant: 'outline-dark',
    size: 'medium',
    label: 'Concession',
    disabled: false,
    showLeadingIcon: false,
    showTrailingIcon: false,
  },
};

// Outline Light variants (shown on dark background in Storybook)
export const OutlineLight = {
  args: {
    variant: 'outline-light',
    size: 'medium',
    label: 'Concession',
    disabled: false,
    showLeadingIcon: false,
    showTrailingIcon: false,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

// Ghost Dark variants
export const GhostDark = {
  args: {
    variant: 'ghost-dark',
    size: 'medium',
    label: 'Concession',
    disabled: false,
    showLeadingIcon: false,
    showTrailingIcon: false,
  },
};

// Ghost Light variants (shown on dark background in Storybook)
export const GhostLight = {
  args: {
    variant: 'ghost-light',
    size: 'medium',
    label: 'Concession',
    disabled: false,
    showLeadingIcon: false,
    showTrailingIcon: false,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

// Size variations
export const Small = {
  args: {
    variant: 'solid',
    size: 'small',
    label: 'Small',
    disabled: false,
  },
};

export const Medium = {
  args: {
    variant: 'solid',
    size: 'medium',
    label: 'Medium',
    disabled: false,
  },
};

export const Large = {
  args: {
    variant: 'solid',
    size: 'large',
    label: 'Large',
    disabled: false,
  },
};

export const ExtraLarge = {
  args: {
    variant: 'solid',
    size: 'extra-large',
    label: 'Extra Large',
    disabled: false,
  },
};

// Disabled state
export const Disabled = {
  args: {
    variant: 'solid',
    size: 'medium',
    label: 'Disabled',
    disabled: true,
  },
};

// With both icons
export const WithBothIcons = {
  args: {
    variant: 'solid',
    size: 'large',
    label: 'Special Offer',
    disabled: false,
    showLeadingIcon: true,
    showTrailingIcon: true,
    leadingIconName: 'bell',
    trailingIconName: 'arrow-right',
  },
};
