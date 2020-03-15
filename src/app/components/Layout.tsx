import React from 'react';
import Header from '../core/shared/+shell/components/header/header.component';
import Footer from './Footer';
import Navbar from './Navbar';

interface ILayoutProps {
  location?: string;
  style?: object;
  title?: string;
}

class Layout extends React.Component<ILayoutProps, {}> {
  render() {
    const { children } = this.props;
    const importedStyle = this.props.style;
    const defaultStyle = {
      marginLeft: 'auto',
      marginRight: 'auto',
    };

    const finalStyle = {
      ...defaultStyle,
      ...importedStyle,
    };
    return (
      <div style={finalStyle}>
        {/* <Navbar /> */}
        <br />
        {children}
        <Footer />
      </div>
    );
  }
}

export default Layout;
