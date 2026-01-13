import BetslipButton from './BetslipButton';
import Icon from '../../assets/icons';
import { iconMap, iconNames, getIcon } from '../../assets/icons/iconList';

export default {
  title: 'Components/BetslipButton',
  component: BetslipButton,
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
      <BetslipButton 
        {...args}
        size={size}
        showLeadingIcon={showLeadingIcon && !!leadingIconSrc}
        showTrailingIcon={showTrailingIcon && !!trailingIconSrc}
        leadingIcon={leadingIconSrc ? <Icon src={leadingIconSrc} size={iconSize} /> : undefined}
        trailingIcon={trailingIconSrc ? <Icon src={trailingIconSrc} size={iconSize} /> : undefined}
      >
        {label}
      </BetslipButton>
    );
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['add', 'remove'],
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
    variant: 'add',
    size: 'medium',
    label: 'Add to Betslip',
    disabled: false,
    showLeadingIcon: false,
    showTrailingIcon: false,
    leadingIconName: 'none',
    trailingIconName: 'none',
  },
};

// Add variant
export const Add = {
  args: {
    variant: 'add',
    size: 'medium',
    label: 'Add to Betslip',
    disabled: false,
    showLeadingIcon: false,
    showTrailingIcon: false,
  },
};

export const AddWithLeadingIcon = {
  args: {
    variant: 'add',
    size: 'medium',
    label: 'Add',
    disabled: false,
    showLeadingIcon: true,
    showTrailingIcon: false,
    leadingIconName: 'add-circle',
  },
};

export const AddWithTrailingIcon = {
  args: {
    variant: 'add',
    size: 'medium',
    label: 'Add to Betslip',
    disabled: false,
    showLeadingIcon: false,
    showTrailingIcon: true,
    trailingIconName: 'arrow-right',
  },
};

// Remove variant
export const Remove = {
  args: {
    variant: 'remove',
    size: 'medium',
    label: 'Remove',
    disabled: false,
    showLeadingIcon: false,
    showTrailingIcon: false,
  },
};

export const RemoveWithLeadingIcon = {
  args: {
    variant: 'remove',
    size: 'medium',
    label: 'Remove',
    disabled: false,
    showLeadingIcon: true,
    showTrailingIcon: false,
    leadingIconName: 'close',
  },
};

export const RemoveWithTrailingIcon = {
  args: {
    variant: 'remove',
    size: 'medium',
    label: 'Remove from Betslip',
    disabled: false,
    showLeadingIcon: false,
    showTrailingIcon: true,
    trailingIconName: 'close',
  },
};

// Size variations - Add
export const SmallAdd = {
  args: {
    variant: 'add',
    size: 'small',
    label: 'Add',
    disabled: false,
  },
};

export const MediumAdd = {
  args: {
    variant: 'add',
    size: 'medium',
    label: 'Add to Bet',
    disabled: false,
  },
};

export const LargeAdd = {
  args: {
    variant: 'add',
    size: 'large',
    label: 'Add to Betslip',
    disabled: false,
  },
};

export const ExtraLargeAdd = {
  args: {
    variant: 'add',
    size: 'extra-large',
    label: 'Add to Betslip',
    disabled: false,
  },
};

// Size variations - Remove
export const SmallRemove = {
  args: {
    variant: 'remove',
    size: 'small',
    label: 'Remove',
    disabled: false,
  },
};

export const MediumRemove = {
  args: {
    variant: 'remove',
    size: 'medium',
    label: 'Remove',
    disabled: false,
  },
};

export const LargeRemove = {
  args: {
    variant: 'remove',
    size: 'large',
    label: 'Remove from Betslip',
    disabled: false,
  },
};

export const ExtraLargeRemove = {
  args: {
    variant: 'remove',
    size: 'extra-large',
    label: 'Remove from Betslip',
    disabled: false,
  },
};

// Disabled states
export const AddDisabled = {
  args: {
    variant: 'add',
    size: 'medium',
    label: 'Add to Betslip',
    disabled: true,
  },
};

export const RemoveDisabled = {
  args: {
    variant: 'remove',
    size: 'medium',
    label: 'Remove',
    disabled: true,
  },
};

// With both icons
export const AddWithBothIcons = {
  args: {
    variant: 'add',
    size: 'large',
    label: 'Add to Betslip',
    disabled: false,
    showLeadingIcon: true,
    showTrailingIcon: true,
    leadingIconName: 'add-circle',
    trailingIconName: 'arrow-right',
  },
};

export const RemoveWithBothIcons = {
  args: {
    variant: 'remove',
    size: 'large',
    label: 'Remove from Betslip',
    disabled: false,
    showLeadingIcon: true,
    showTrailingIcon: true,
    leadingIconName: 'close',
    trailingIconName: 'arrow-right',
  },
};
