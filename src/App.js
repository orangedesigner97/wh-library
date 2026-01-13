import './App.css';
import PrimaryButton from './components/PrimaryButton/PrimaryButton.js';
import PrimaryButtonV2 from './components/PrimaryButtonV2/PrimaryButtonV2.js';
import ConcessionButton from './components/ConcessionButton/ConcessionButton.js';
import TextButton from './components/TextButton/TextButton.js';
import BetslipButton from './components/BetslipButton/BetslipButton.js';
import SideNavHeader from './components/SideNavHeader/SideNavHeader.js';
import Icon from './assets/icons';
import { getIcon } from './assets/icons/iconList';
import { useState } from 'react';

function App() {
  // State for side nav demo
  const [isNavOpen, setIsNavOpen] = useState(false);
  
  // Get different icons for demonstration
  const searchIcon = getIcon('icon-placeholder');
  const arrowRightIcon = getIcon('arrow-right');
  const homeIcon = getIcon('home');
  const settingsIcon = getIcon('settings');
  const bellIcon = getIcon('bell');
  const downloadIcon = getIcon('download');
  const plusIcon = getIcon('add-circle');
  const closeIcon = getIcon('close');
  
  return (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '50px' }}>
      <h1 className="wh-heading-lg-bold">William Hill Component Library</h1>
      
      {/* PRIMARY BUTTON V2 (NEW) */}
      <div>
        <h2 className="wh-heading-md-bold" style={{ marginBottom: '20px' }}>Primary Button V2 (New)</h2>
        
        <section style={{ marginBottom: '30px' }}>
          <h3 className="wh-body-lg-semibold" style={{ marginBottom: '10px' }}>Sizes</h3>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
            <PrimaryButtonV2 size="small">Small</PrimaryButtonV2>
            <PrimaryButtonV2 size="medium">Medium</PrimaryButtonV2>
            <PrimaryButtonV2 size="large">Large</PrimaryButtonV2>
          </div>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h3 className="wh-body-lg-semibold" style={{ marginBottom: '10px' }}>Variants</h3>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
            <PrimaryButtonV2 variant="default">Default</PrimaryButtonV2>
            <PrimaryButtonV2 variant="secondary">Secondary</PrimaryButtonV2>
            <PrimaryButtonV2 variant="success">Success</PrimaryButtonV2>
            <PrimaryButtonV2 variant="danger">Danger</PrimaryButtonV2>
          </div>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h3 className="wh-body-lg-semibold" style={{ marginBottom: '10px' }}>States</h3>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
            <PrimaryButtonV2>Default State</PrimaryButtonV2>
            <PrimaryButtonV2 disabled>Disabled</PrimaryButtonV2>
          </div>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h3 className="wh-body-lg-semibold" style={{ marginBottom: '10px' }}>All Variants</h3>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
            <PrimaryButtonV2 variant="default" size="small">Default Small</PrimaryButtonV2>
            <PrimaryButtonV2 variant="secondary" size="small">Secondary Small</PrimaryButtonV2>
            <PrimaryButtonV2 variant="success" size="medium">Success Medium</PrimaryButtonV2>
            <PrimaryButtonV2 variant="danger" size="large">Danger Large</PrimaryButtonV2>
            <PrimaryButtonV2 variant="default" size="medium" disabled>Disabled</PrimaryButtonV2>
          </div>
        </section>
      </div>
      
      {/* SIDE NAV HEADER */}
      <div>
        <h2 className="wh-heading-md-bold" style={{ marginBottom: '20px' }}>Side Nav Header</h2>
        
        <section style={{ marginBottom: '30px' }}>
          <h3 className="wh-body-lg-semibold" style={{ marginBottom: '10px' }}>Default Variant</h3>
          <div style={{ maxWidth: '320px', border: '1px solid #e0e0e0', borderRadius: '8px', overflow: 'hidden' }}>
            <SideNavHeader 
              title="William Hill"
              isOpen={isNavOpen}
              onMenuToggle={() => setIsNavOpen(!isNavOpen)}
            />
            <div style={{ padding: '16px', backgroundColor: '#f5f5f5', minHeight: '150px' }}>
              <p style={{ margin: '0 0 8px 0', color: '#666', fontSize: '14px' }}>
                Navigation content area
              </p>
              <p style={{ margin: 0, color: '#999', fontSize: '12px' }}>
                Menu is {isNavOpen ? 'open' : 'closed'}
              </p>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h3 className="wh-body-lg-semibold" style={{ marginBottom: '10px' }}>With User Info</h3>
          <div style={{ maxWidth: '320px', border: '1px solid #e0e0e0', borderRadius: '8px', overflow: 'hidden' }}>
            <SideNavHeader 
              title="William Hill"
              showUserInfo
              userName="John Doe"
              onMenuToggle={() => console.log('Menu toggled')}
            />
            <div style={{ padding: '16px', backgroundColor: '#f5f5f5', minHeight: '150px' }}>
              <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>
                Navigation with user info displayed
              </p>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h3 className="wh-body-lg-semibold" style={{ marginBottom: '10px' }}>Branded Variant</h3>
          <div style={{ maxWidth: '320px', border: '1px solid #e0e0e0', borderRadius: '8px', overflow: 'hidden' }}>
            <SideNavHeader 
              title="William Hill"
              variant="branded"
              onMenuToggle={() => console.log('Menu toggled')}
            />
            <div style={{ padding: '16px', backgroundColor: '#f5f5f5', minHeight: '150px' }}>
              <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>
                Branded gradient background
              </p>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h3 className="wh-body-lg-semibold" style={{ marginBottom: '10px' }}>Branded with User</h3>
          <div style={{ maxWidth: '320px', border: '1px solid #e0e0e0', borderRadius: '8px', overflow: 'hidden' }}>
            <SideNavHeader 
              title="William Hill"
              variant="branded"
              showUserInfo
              userName="Jane Smith"
              onMenuToggle={() => console.log('Menu toggled')}
            />
            <div style={{ padding: '16px', backgroundColor: '#f5f5f5', minHeight: '150px' }}>
              <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>
                Branded with user information
              </p>
            </div>
          </div>
        </section>
      </div>
      
      {/* PRIMARY BUTTON */}
      <div>
        <h2 className="wh-heading-md-bold" style={{ marginBottom: '20px' }}>Primary Button</h2>
        
        <section style={{ marginBottom: '30px' }}>
          <h3 className="wh-body-lg-semibold" style={{ marginBottom: '10px' }}>Solid Variant</h3>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
            <PrimaryButton variant="solid" size="small" showLeadingIcon leadingIcon={<Icon src={searchIcon} size={16} />}>Search</PrimaryButton>
            <PrimaryButton variant="solid" size="medium" showTrailingIcon trailingIcon={<Icon src={arrowRightIcon} size={16} />}>Next</PrimaryButton>
            <PrimaryButton variant="solid" size="large" showLeadingIcon leadingIcon={<Icon src={homeIcon} size={20} />}>Home</PrimaryButton>
            <PrimaryButton variant="solid" size="extra-large" showLeadingIcon showTrailingIcon leadingIcon={<Icon src={settingsIcon} size={20} />} trailingIcon={<Icon src={arrowRightIcon} size={20} />}>Settings</PrimaryButton>
            <PrimaryButton variant="solid" disabled>Disabled</PrimaryButton>
          </div>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h3 className="wh-body-lg-semibold" style={{ marginBottom: '10px' }}>Outline Dark Variant</h3>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
            <PrimaryButton variant="outline-dark" size="small" showLeadingIcon leadingIcon={<Icon src={bellIcon} size={16} />}>Alerts</PrimaryButton>
            <PrimaryButton variant="outline-dark" size="medium" showTrailingIcon trailingIcon={<Icon src={downloadIcon} size={16} />}>Download</PrimaryButton>
            <PrimaryButton variant="outline-dark" size="large">Large</PrimaryButton>
            <PrimaryButton variant="outline-dark" size="extra-large">Extra Large</PrimaryButton>
            <PrimaryButton variant="outline-dark" disabled>Disabled</PrimaryButton>
          </div>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h3 className="wh-body-lg-semibold" style={{ marginBottom: '10px' }}>Outline Light Variant</h3>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', background: '#183060', padding: '20px', borderRadius: '8px', flexWrap: 'wrap' }}>
            <PrimaryButton variant="outline-light" size="small" showLeadingIcon leadingIcon={<Icon src={searchIcon} size={16} />}>Search</PrimaryButton>
            <PrimaryButton variant="outline-light" size="medium">Medium</PrimaryButton>
            <PrimaryButton variant="outline-light" size="large">Large</PrimaryButton>
            <PrimaryButton variant="outline-light" size="extra-large">Extra Large</PrimaryButton>
            <PrimaryButton variant="outline-light" disabled>Disabled</PrimaryButton>
          </div>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h3 className="wh-body-lg-semibold" style={{ marginBottom: '10px' }}>Ghost Dark Variant</h3>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
            <PrimaryButton variant="ghost-dark" size="small">Small</PrimaryButton>
            <PrimaryButton variant="ghost-dark" size="medium">Medium</PrimaryButton>
            <PrimaryButton variant="ghost-dark" size="large">Large</PrimaryButton>
            <PrimaryButton variant="ghost-dark" size="extra-large">Extra Large</PrimaryButton>
            <PrimaryButton variant="ghost-dark" disabled>Disabled</PrimaryButton>
          </div>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h3 className="wh-body-lg-semibold" style={{ marginBottom: '10px' }}>Ghost Light Variant</h3>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', background: '#183060', padding: '20px', borderRadius: '8px', flexWrap: 'wrap' }}>
            <PrimaryButton variant="ghost-light" size="small">Small</PrimaryButton>
            <PrimaryButton variant="ghost-light" size="medium">Medium</PrimaryButton>
            <PrimaryButton variant="ghost-light" size="large">Large</PrimaryButton>
            <PrimaryButton variant="ghost-light" size="extra-large">Extra Large</PrimaryButton>
            <PrimaryButton variant="ghost-light" disabled>Disabled</PrimaryButton>
          </div>
        </section>
      </div>

      {/* CONCESSION BUTTON */}
      <div>
        <h2 className="wh-heading-md-bold" style={{ marginBottom: '20px' }}>Concession Button</h2>
        
        <section style={{ marginBottom: '30px' }}>
          <h3 className="wh-body-lg-semibold" style={{ marginBottom: '10px' }}>Solid Variant</h3>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
            <ConcessionButton variant="solid" size="small" showLeadingIcon leadingIcon={<Icon src={bellIcon} size={16} />}>Offer</ConcessionButton>
            <ConcessionButton variant="solid" size="medium" showTrailingIcon trailingIcon={<Icon src={arrowRightIcon} size={16} />}>Claim Now</ConcessionButton>
            <ConcessionButton variant="solid" size="large">Boost</ConcessionButton>
            <ConcessionButton variant="solid" size="extra-large">Special Offer</ConcessionButton>
            <ConcessionButton variant="solid" disabled>Disabled</ConcessionButton>
          </div>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h3 className="wh-body-lg-semibold" style={{ marginBottom: '10px' }}>Outline Dark Variant</h3>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
            <ConcessionButton variant="outline-dark" size="small">Small</ConcessionButton>
            <ConcessionButton variant="outline-dark" size="medium">Medium</ConcessionButton>
            <ConcessionButton variant="outline-dark" size="large">Large</ConcessionButton>
            <ConcessionButton variant="outline-dark" size="extra-large">Extra Large</ConcessionButton>
            <ConcessionButton variant="outline-dark" disabled>Disabled</ConcessionButton>
          </div>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h3 className="wh-body-lg-semibold" style={{ marginBottom: '10px' }}>Outline Light Variant</h3>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', background: '#183060', padding: '20px', borderRadius: '8px', flexWrap: 'wrap' }}>
            <ConcessionButton variant="outline-light" size="small">Small</ConcessionButton>
            <ConcessionButton variant="outline-light" size="medium">Medium</ConcessionButton>
            <ConcessionButton variant="outline-light" size="large">Large</ConcessionButton>
            <ConcessionButton variant="outline-light" size="extra-large">Extra Large</ConcessionButton>
            <ConcessionButton variant="outline-light" disabled>Disabled</ConcessionButton>
          </div>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h3 className="wh-body-lg-semibold" style={{ marginBottom: '10px' }}>Ghost Dark Variant</h3>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
            <ConcessionButton variant="ghost-dark" size="small">Small</ConcessionButton>
            <ConcessionButton variant="ghost-dark" size="medium">Medium</ConcessionButton>
            <ConcessionButton variant="ghost-dark" size="large">Large</ConcessionButton>
            <ConcessionButton variant="ghost-dark" size="extra-large">Extra Large</ConcessionButton>
            <ConcessionButton variant="ghost-dark" disabled>Disabled</ConcessionButton>
          </div>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h3 className="wh-body-lg-semibold" style={{ marginBottom: '10px' }}>Ghost Light Variant</h3>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', background: '#183060', padding: '20px', borderRadius: '8px', flexWrap: 'wrap' }}>
            <ConcessionButton variant="ghost-light" size="small">Small</ConcessionButton>
            <ConcessionButton variant="ghost-light" size="medium">Medium</ConcessionButton>
            <ConcessionButton variant="ghost-light" size="large">Large</ConcessionButton>
            <ConcessionButton variant="ghost-light" size="extra-large">Extra Large</ConcessionButton>
            <ConcessionButton variant="ghost-light" disabled>Disabled</ConcessionButton>
          </div>
        </section>
      </div>

      {/* TEXT BUTTON */}
      <div>
        <h2 className="wh-heading-md-bold" style={{ marginBottom: '20px' }}>Text Button</h2>
        
        <section style={{ marginBottom: '30px' }}>
          <h3 className="wh-body-lg-semibold" style={{ marginBottom: '10px' }}>Default Variant</h3>
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center', flexWrap: 'wrap' }}>
            <TextButton variant="default" size="small" showLeadingIcon leadingIcon={<Icon src={downloadIcon} size={16} />}>Download</TextButton>
            <TextButton variant="default" size="medium" showTrailingIcon trailingIcon={<Icon src={arrowRightIcon} size={16} />}>Learn More</TextButton>
            <TextButton variant="default" size="large">View Details</TextButton>
            <TextButton variant="default" size="extra-large">See All</TextButton>
            <TextButton variant="default" disabled>Disabled</TextButton>
          </div>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h3 className="wh-body-lg-semibold" style={{ marginBottom: '10px' }}>Inverted Variant</h3>
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center', background: '#183060', padding: '20px', borderRadius: '8px', flexWrap: 'wrap' }}>
            <TextButton variant="inverted" size="small" showLeadingIcon leadingIcon={<Icon src={downloadIcon} size={16} />}>Download</TextButton>
            <TextButton variant="inverted" size="medium" showTrailingIcon trailingIcon={<Icon src={arrowRightIcon} size={16} />}>Learn More</TextButton>
            <TextButton variant="inverted" size="large">View Details</TextButton>
            <TextButton variant="inverted" size="extra-large">See All</TextButton>
            <TextButton variant="inverted" disabled>Disabled</TextButton>
          </div>
        </section>
      </div>

      {/* BETSLIP BUTTON */}
      <div>
        <h2 className="wh-heading-md-bold" style={{ marginBottom: '20px' }}>Betslip Button</h2>
        
        <section style={{ marginBottom: '30px' }}>
          <h3 className="wh-body-lg-semibold" style={{ marginBottom: '10px' }}>Add Variant</h3>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
            <BetslipButton variant="add" size="small" showLeadingIcon leadingIcon={<Icon src={plusIcon} size={16} />}>Add</BetslipButton>
            <BetslipButton variant="add" size="medium">Add to Bet</BetslipButton>
            <BetslipButton variant="add" size="large">Add to Betslip</BetslipButton>
            <BetslipButton variant="add" size="extra-large">Add to Betslip</BetslipButton>
            <BetslipButton variant="add" disabled>Disabled</BetslipButton>
          </div>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h3 className="wh-body-lg-semibold" style={{ marginBottom: '10px' }}>Remove Variant</h3>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
            <BetslipButton variant="remove" size="small" showLeadingIcon leadingIcon={<Icon src={closeIcon} size={16} />}>Remove</BetslipButton>
            <BetslipButton variant="remove" size="medium">Remove</BetslipButton>
            <BetslipButton variant="remove" size="large">Remove from Betslip</BetslipButton>
            <BetslipButton variant="remove" size="extra-large">Remove from Betslip</BetslipButton>
            <BetslipButton variant="remove" disabled>Disabled</BetslipButton>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;