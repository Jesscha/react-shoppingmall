import React from 'react';
import { connect } from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/directory.selector';
import MenuItems from '../menue-item/menu-items.component';

import './directory.styles.scss';
import { createStructuredSelector } from 'reselect';

const Directory = ({sections}) => (
      <div className="directory-menu">
        {
          sections.map(({ id, ...sectionProps }) => {
            return (
            <MenuItems key={id} {...sectionProps} />
          )}
          )}
      </div>
    )

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);