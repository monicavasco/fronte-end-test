import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import twotoneRadioButtonChecked from '@iconify/icons-ic/twotone-radio-button-checked';
import leafIcon from '@iconify/icons-ion/leaf';

import './styles.css';

export default function Sidebar() {
  return (
      <div className="sidebar">
        <Link to="/" className="sidebar__logo">Semantix</Link>
        <div className="sidebar__sidebarItem">
          <Link to="/page1"><p><Icon icon={twotoneRadioButtonChecked} width="35" height="35"/></p>Page-1</Link>
          <Link to="/page2"><p><Icon icon={leafIcon} width="35" height="35"/></p>Page-2</Link>
        </div>
      </div>
  )
}