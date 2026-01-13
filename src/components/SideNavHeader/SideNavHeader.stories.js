import React, { useState } from 'react';
import SideNavHeader from './SideNavHeader';

export default {
  title: 'Components/SideNavHeader',
  component: SideNavHeader,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Header section for side navigation with logo, menu toggle, and optional user info. Designed for use in side drawers and navigation panels.',
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Title/Logo text to display',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'William Hill' },
      },
    },
    isOpen: {
      control: 'boolean',
      description: 'Navigation open/closed state',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    showUserInfo: {
      control: 'boolean',
      description: 'Show user information section',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    userName: {
      control: 'text',
      description: 'User name to display',
      table: {
        type: { summary: 'string' },
      },
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'branded'],
      description: 'Visual variant',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    onMenuToggle: {
      action: 'menu toggled',
      description: 'Menu toggle handler',
    },
  },
};

const Template = (args) => {
  const [isOpen, setIsOpen] = useState(args.isOpen);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    args.onMenuToggle?.();
  };

  return (
    <div style={{ width: '320px', border: '1px solid #e0e0e0' }}>
      <SideNavHeader {...args} isOpen={isOpen} onMenuToggle={handleToggle} />
      <div style={{ padding: '16px', backgroundColor: '#f5f5f5', minHeight: '200px' }}>
        <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>
          Navigation content would appear here...
        </p>
      </div>
    </div>
  );
};

// ========================================
// DEFAULT STORIES
// ========================================

export const Default = Template.bind({});
Default.args = {
  title: 'William Hill',
  isOpen: false,
  showUserInfo: false,
  variant: 'default',
};
Default.parameters = {
  docs: {
    description: {
      story: 'Default side navigation header with title and menu toggle.',
    },
  },
};

export const WithUserInfo = Template.bind({});
WithUserInfo.args = {
  title: 'William Hill',
  isOpen: false,
  showUserInfo: true,
  userName: 'John Doe',
  variant: 'default',
};
WithUserInfo.parameters = {
  docs: {
    description: {
      story: 'Side navigation header with user information displayed.',
    },
  },
};

export const BrandedVariant = Template.bind({});
BrandedVariant.args = {
  title: 'William Hill',
  isOpen: false,
  showUserInfo: false,
  variant: 'branded',
};
BrandedVariant.parameters = {
  docs: {
    description: {
      story: 'Branded variant with gradient background and white text.',
    },
  },
};

export const BrandedWithUser = Template.bind({});
BrandedWithUser.args = {
  title: 'William Hill',
  isOpen: false,
  showUserInfo: true,
  userName: 'Jane Smith',
  variant: 'branded',
};
BrandedWithUser.parameters = {
  docs: {
    description: {
      story: 'Branded variant with user information.',
    },
  },
};

export const MenuOpen = Template.bind({});
MenuOpen.args = {
  title: 'William Hill',
  isOpen: true,
  showUserInfo: false,
  variant: 'default',
};
MenuOpen.parameters = {
  docs: {
    description: {
      story: 'Side navigation header with menu open state (shows close icon).',
    },
  },
};

export const CustomTitle = Template.bind({});
CustomTitle.args = {
  title: 'Sports Betting',
  isOpen: false,
  showUserInfo: false,
  variant: 'default',
};
CustomTitle.parameters = {
  docs: {
    description: {
      story: 'Side navigation header with custom title text.',
    },
  },
};

export const LongUserName = Template.bind({});
LongUserName.args = {
  title: 'William Hill',
  isOpen: false,
  showUserInfo: true,
  userName: 'Christopher Alexander Williams',
  variant: 'default',
};
LongUserName.parameters = {
  docs: {
    description: {
      story: 'Shows text truncation for long user names.',
    },
  },
};

// ========================================
// RESPONSIVE DEMO
// ========================================

export const ResponsiveDemo = () => (
  <div style={{ display: 'flex', gap: '24px', flexDirection: 'column' }}>
    <div>
      <h3 style={{ marginBottom: '16px' }}>Desktop (320px)</h3>
      <div style={{ width: '320px', border: '1px solid #e0e0e0' }}>
        <SideNavHeader
          title="William Hill"
          showUserInfo={true}
          userName="John Doe"
          onMenuToggle={() => console.log('Toggle clicked')}
        />
      </div>
    </div>
    
    <div>
      <h3 style={{ marginBottom: '16px' }}>Tablet (280px)</h3>
      <div style={{ width: '280px', border: '1px solid #e0e0e0' }}>
        <SideNavHeader
          title="William Hill"
          showUserInfo={true}
          userName="John Doe"
          onMenuToggle={() => console.log('Toggle clicked')}
        />
      </div>
    </div>
    
    <div>
      <h3 style={{ marginBottom: '16px' }}>Mobile (240px)</h3>
      <div style={{ width: '240px', border: '1px solid #e0e0e0' }}>
        <SideNavHeader
          title="William Hill"
          showUserInfo={true}
          userName="John Doe"
          onMenuToggle={() => console.log('Toggle clicked')}
        />
      </div>
    </div>
  </div>
);
ResponsiveDemo.parameters = {
  docs: {
    description: {
      story: 'Demonstrates responsive behavior at different viewport widths.',
    },
  },
};

// ========================================
// VARIANTS COMPARISON
// ========================================

export const VariantsComparison = () => (
  <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
    <div>
      <h3 style={{ marginBottom: '16px' }}>Default Variant</h3>
      <div style={{ width: '320px', border: '1px solid #e0e0e0' }}>
        <SideNavHeader
          title="William Hill"
          variant="default"
          onMenuToggle={() => console.log('Toggle clicked')}
        />
        <div style={{ padding: '16px', backgroundColor: '#f5f5f5', minHeight: '100px' }}>
          <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>Content area</p>
        </div>
      </div>
    </div>
    
    <div>
      <h3 style={{ marginBottom: '16px' }}>Branded Variant</h3>
      <div style={{ width: '320px', border: '1px solid #e0e0e0' }}>
        <SideNavHeader
          title="William Hill"
          variant="branded"
          onMenuToggle={() => console.log('Toggle clicked')}
        />
        <div style={{ padding: '16px', backgroundColor: '#f5f5f5', minHeight: '100px' }}>
          <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>Content area</p>
        </div>
      </div>
    </div>
  </div>
);
VariantsComparison.parameters = {
  docs: {
    description: {
      story: 'Side-by-side comparison of all available variants.',
    },
  },
};
