import PrimaryButton from './PrimaryButton';
import Icon from '../../assets/icons';
import { iconMap, iconNames, getIcon } from '../../assets/icons/iconList';

export default {
  title: 'Components/PrimaryButton',
  component: PrimaryButton,
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
      <PrimaryButton 
        {...args}
        size={size}
        showLeadingIcon={showLeadingIcon && !!leadingIconSrc}
        showTrailingIcon={showTrailingIcon && !!trailingIconSrc}
        leadingIcon={leadingIconSrc ? <Icon src={leadingIconSrc} size={iconSize} /> : undefined}
        trailingIcon={trailingIconSrc ? <Icon src={trailingIconSrc} size={iconSize} /> : undefined}
      >
        {label}
      </PrimaryButton>
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
    leadingIconName: {
      control: 'select',
      options: ['none', ...iconNames],
      description: 'Leading icon name',
    },
    showTrailingIcon: {
      control: 'boolean',
      description: 'Show trailing icon',
    },
    trailingIconName: {
      control: 'select',
      options: ['none', ...iconNames],
      description: 'Trailing icon name',
    },
  },
};

// Solid variant stories
export const Solid = {
  args: {
    variant: 'solid',
    size: "extra-large",
    label: 'Button',
    disabled: false,
    showLeadingIcon: true,
    leadingIconName: "icon-placeholder",
    showTrailingIcon: true,
    trailingIconName: "icon-placeholder",
  },
};

export const SolidSmall = {
  args: {
    variant: 'solid',
    size: 'small',
    label: 'Button',
  },
};

export const SolidMedium = {
  args: {
    variant: 'solid',
    size: 'medium',
    label: 'Button',
  },
};

export const SolidLarge = {
  args: {
    variant: 'solid',
    size: 'large',
    label: 'Button',
  },
};

export const SolidExtraLarge = {
  args: {
    variant: 'solid',
    size: 'extra-large',
    label: 'Button',
  },
};

// Outline Dark variant
export const OutlineDark = {
  args: {
    variant: 'outline-dark',
    size: 'medium',
    label: 'Button',
  },
};

// Outline Light variant (on dark background)
export const OutlineLight = {
  args: {
    variant: 'outline-light',
    size: 'medium',
    label: 'Button',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

// Ghost Dark variant
export const GhostDark = {
  args: {
    variant: 'ghost-dark',
    size: 'medium',
    label: 'Button',
  },
};

// Ghost Light variant (on dark background)
export const GhostLight = {
  args: {
    variant: 'ghost-light',
    size: 'medium',
    label: 'Button',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

// With icons
export const WithLeadingIcon = {
  args: {
    variant: 'solid',
    size: 'medium',
    label: 'Search',
    showLeadingIcon: true,
    leadingIconName: 'search',
  },
};

export const WithTrailingIcon = {
  args: {
    variant: 'solid',
    size: 'medium',
    label: 'Next',
    showTrailingIcon: true,
    trailingIconName: 'arrow-right',
  },
};

export const WithBothIcons = {
  args: {
    variant: 'solid',
    size: 'medium',
    label: 'Home',
    showLeadingIcon: true,
    leadingIconName: 'home',
    showTrailingIcon: true,
    trailingIconName: 'arrow-right',
  },
};

export const IconsSizeSmall = {
  args: {
    variant: 'solid',
    size: 'small',
    label: 'Search',
    showLeadingIcon: true,
    leadingIconName: 'search',
  },
};

export const IconsSizeLarge = {
  args: {
    variant: 'solid',
    size: 'large',
    label: 'Search',
    showLeadingIcon: true,
    leadingIconName: 'search',
  },
};

export const IconsAllVariants = {
  render: () => {
    const searchIconSrc = getIcon('search');
    const arrowRightIconSrc = getIcon('arrow-right');
    const homeIconSrc = getIcon('home');
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ display: 'flex', gap: '16px', padding: '16px', background: '#fff', flexWrap: 'wrap' }}>
          <PrimaryButton 
            variant="solid" 
            size="medium" 
            showLeadingIcon 
            leadingIcon={<Icon src={searchIconSrc} size={16} />}
          >
            Search
          </PrimaryButton>
          <PrimaryButton 
            variant="outline-dark" 
            size="medium" 
            showTrailingIcon 
            trailingIcon={<Icon src={arrowRightIconSrc} size={16} />}
          >
            Next
          </PrimaryButton>
          <PrimaryButton 
            variant="ghost-dark" 
            size="medium" 
            showLeadingIcon 
            showTrailingIcon
            leadingIcon={<Icon src={homeIconSrc} size={16} />}
            trailingIcon={<Icon src={arrowRightIconSrc} size={16} />}
          >
            Home
          </PrimaryButton>
        </div>
        <div style={{ display: 'flex', gap: '16px', padding: '16px', background: '#003B5C', flexWrap: 'wrap' }}>
          <PrimaryButton 
            variant="outline-light" 
            size="medium" 
            showLeadingIcon 
            leadingIcon={<Icon src={searchIconSrc} size={16} />}
          >
            Search
          </PrimaryButton>
          <PrimaryButton 
            variant="ghost-light" 
            size="medium" 
            showTrailingIcon 
            trailingIcon={<Icon src={arrowRightIconSrc} size={16} />}
          >
            Next
          </PrimaryButton>
        </div>
      </div>
    );
  },
};

export const IconsAllSizes = {
  render: () => {
    const searchIconSrc = getIcon('search');
    
    return (
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
        <PrimaryButton 
          variant="solid" 
          size="small" 
          showLeadingIcon 
          leadingIcon={<Icon src={searchIconSrc} size={16} />}
        >
          Small
        </PrimaryButton>
        <PrimaryButton 
          variant="solid" 
          size="medium" 
          showLeadingIcon 
          leadingIcon={<Icon src={searchIconSrc} size={16} />}
        >
          Medium
        </PrimaryButton>
        <PrimaryButton 
          variant="solid" 
          size="large" 
          showLeadingIcon 
          leadingIcon={<Icon src={searchIconSrc} size={20} />}
        >
          Large
        </PrimaryButton>
        <PrimaryButton 
          variant="solid" 
          size="extra-large" 
          showLeadingIcon 
          leadingIcon={<Icon src={searchIconSrc} size={20} />}
        >
          Extra Large
        </PrimaryButton>
      </div>
    );
  },
};

// Disabled states
export const Disabled = {
  args: {
    variant: 'solid',
    size: 'medium',
    label: 'Button',
    disabled: true,
  },
};

// All sizes comparison
export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
      <PrimaryButton variant="solid" size="small">Small</PrimaryButton>
      <PrimaryButton variant="solid" size="medium">Medium</PrimaryButton>
      <PrimaryButton variant="solid" size="large">Large</PrimaryButton>
      <PrimaryButton variant="solid" size="extra-large">Extra Large</PrimaryButton>
    </div>
  ),
};

// All variants comparison
export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', gap: '16px', padding: '16px', background: '#fff' }}>
        <PrimaryButton variant="solid" size="medium">Solid</PrimaryButton>
        <PrimaryButton variant="outline-dark" size="medium">Outline Dark</PrimaryButton>
        <PrimaryButton variant="ghost-dark" size="medium">Ghost Dark</PrimaryButton>
      </div>
      <div style={{ display: 'flex', gap: '16px', padding: '16px', background: '#003B5C' }}>
        <PrimaryButton variant="outline-light" size="medium">Outline Light</PrimaryButton>
        <PrimaryButton variant="ghost-light" size="medium">Ghost Light</PrimaryButton>
      </div>
    </div>
  ),
};
