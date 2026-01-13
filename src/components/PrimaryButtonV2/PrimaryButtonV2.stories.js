import React from 'react';
import PrimaryButtonV2 from './PrimaryButtonV2';

export default {
  title: 'Components/PrimaryButtonV2',
  component: PrimaryButtonV2,
  parameters: {
    docs: {
      description: {
        component: 'New simplified Primary Button implementation based on latest Figma design specifications. Clean, modern styling with William Hill design tokens.',
      },
    },
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'Button label text',
      table: {
        type: { summary: 'node' },
      },
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'secondary', 'success', 'danger'],
      description: 'Visual variant',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Button size',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    onClick: {
      action: 'clicked',
      description: 'Click handler',
    },
  },
};

const Template = (args) => <PrimaryButtonV2 {...args} />;

// ========================================
// DEFAULT VARIANT STORIES
// ========================================

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
  variant: 'default',
  size: 'medium',
  disabled: false,
};
Default.parameters = {
  docs: {
    description: {
      story: 'Default primary button with medium size.',
    },
  },
};

export const Small = Template.bind({});
Small.args = {
  children: 'Small Button',
  variant: 'default',
  size: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
  children: 'Medium Button',
  variant: 'default',
  size: 'medium',
};

export const Large = Template.bind({});
Large.args = {
  children: 'Large Button',
  variant: 'default',
  size: 'large',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled Button',
  variant: 'default',
  size: 'medium',
  disabled: true,
};

// ========================================
// VARIANT STORIES
// ========================================

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary',
  variant: 'secondary',
  size: 'medium',
};
Secondary.parameters = {
  docs: {
    description: {
      story: 'Secondary variant with gold/secondary color scheme.',
    },
  },
};

export const Success = Template.bind({});
Success.args = {
  children: 'Success',
  variant: 'success',
  size: 'medium',
};
Success.parameters = {
  docs: {
    description: {
      story: 'Success variant for positive actions.',
    },
  },
};

export const Danger = Template.bind({});
Danger.args = {
  children: 'Danger',
  variant: 'danger',
  size: 'medium',
};
Danger.parameters = {
  docs: {
    description: {
      story: 'Danger variant for destructive actions.',
    },
  },
};

// ========================================
// SIZE COMPARISON
// ========================================

export const AllSizes = () => (
  <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
    <PrimaryButtonV2 size="small">Small</PrimaryButtonV2>
    <PrimaryButtonV2 size="medium">Medium</PrimaryButtonV2>
    <PrimaryButtonV2 size="large">Large</PrimaryButtonV2>
  </div>
);
AllSizes.parameters = {
  docs: {
    description: {
      story: 'All available button sizes side by side.',
    },
  },
};

// ========================================
// VARIANT COMPARISON
// ========================================

export const AllVariants = () => (
  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
    <PrimaryButtonV2 variant="default">Default</PrimaryButtonV2>
    <PrimaryButtonV2 variant="secondary">Secondary</PrimaryButtonV2>
    <PrimaryButtonV2 variant="success">Success</PrimaryButtonV2>
    <PrimaryButtonV2 variant="danger">Danger</PrimaryButtonV2>
  </div>
);
AllVariants.parameters = {
  docs: {
    description: {
      story: 'All color variants displayed together.',
    },
  },
};

// ========================================
// STATE DEMONSTRATIONS
// ========================================

export const DisabledStates = () => (
  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
    <PrimaryButtonV2 variant="default" disabled>Default</PrimaryButtonV2>
    <PrimaryButtonV2 variant="secondary" disabled>Secondary</PrimaryButtonV2>
    <PrimaryButtonV2 variant="success" disabled>Success</PrimaryButtonV2>
    <PrimaryButtonV2 variant="danger" disabled>Danger</PrimaryButtonV2>
  </div>
);
DisabledStates.parameters = {
  docs: {
    description: {
      story: 'Disabled state for all variants.',
    },
  },
};

// ========================================
// USAGE EXAMPLES
// ========================================

export const LongText = Template.bind({});
LongText.args = {
  children: 'Button With Longer Label Text',
  variant: 'default',
  size: 'medium',
};
LongText.parameters = {
  docs: {
    description: {
      story: 'Button with longer text label.',
    },
  },
};

export const FullWidth = () => (
  <div style={{ width: '100%', maxWidth: '400px' }}>
    <PrimaryButtonV2 style={{ width: '100%' }}>
      Full Width Button
    </PrimaryButtonV2>
  </div>
);
FullWidth.parameters = {
  docs: {
    description: {
      story: 'Button stretched to full container width.',
    },
  },
};

// ========================================
// GRID LAYOUT DEMO
// ========================================

export const ComprehensiveGrid = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
    <div>
      <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 'bold' }}>Default Variant</h3>
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <PrimaryButtonV2 variant="default" size="small">Small</PrimaryButtonV2>
        <PrimaryButtonV2 variant="default" size="medium">Medium</PrimaryButtonV2>
        <PrimaryButtonV2 variant="default" size="large">Large</PrimaryButtonV2>
        <PrimaryButtonV2 variant="default" disabled>Disabled</PrimaryButtonV2>
      </div>
    </div>
    
    <div>
      <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 'bold' }}>Secondary Variant</h3>
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <PrimaryButtonV2 variant="secondary" size="small">Small</PrimaryButtonV2>
        <PrimaryButtonV2 variant="secondary" size="medium">Medium</PrimaryButtonV2>
        <PrimaryButtonV2 variant="secondary" size="large">Large</PrimaryButtonV2>
        <PrimaryButtonV2 variant="secondary" disabled>Disabled</PrimaryButtonV2>
      </div>
    </div>
    
    <div>
      <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 'bold' }}>Success Variant</h3>
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <PrimaryButtonV2 variant="success" size="small">Small</PrimaryButtonV2>
        <PrimaryButtonV2 variant="success" size="medium">Medium</PrimaryButtonV2>
        <PrimaryButtonV2 variant="success" size="large">Large</PrimaryButtonV2>
        <PrimaryButtonV2 variant="success" disabled>Disabled</PrimaryButtonV2>
      </div>
    </div>
    
    <div>
      <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 'bold' }}>Danger Variant</h3>
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <PrimaryButtonV2 variant="danger" size="small">Small</PrimaryButtonV2>
        <PrimaryButtonV2 variant="danger" size="medium">Medium</PrimaryButtonV2>
        <PrimaryButtonV2 variant="danger" size="large">Large</PrimaryButtonV2>
        <PrimaryButtonV2 variant="danger" disabled>Disabled</PrimaryButtonV2>
      </div>
    </div>
  </div>
);
ComprehensiveGrid.parameters = {
  docs: {
    description: {
      story: 'Comprehensive overview of all button variants, sizes, and states.',
    },
  },
};
