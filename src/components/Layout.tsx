import React from 'react';
import { rhythm } from '../utils/typography';
import Footer from './Footer';
import Header from './Header';
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
      maxWidth: rhythm(32),
      padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
    };

    const finalStyle = {
      ...defaultStyle,
      ...importedStyle,
    };
    return (
      <div style={finalStyle}>
        <Header />
        <Navbar />
        <br />
        {children}
        <Footer />
      </div>
    );
  }
}

export default Layout;
