import React, { Component } from 'react';
import Modal from 'react-responsive-modal';

interface ILightBoxImageProps {
  title: string;
  caption: string;
  src: string;
}

export class LightboxImage extends Component<ILightBoxImageProps, {}> {
  state = {
    open: false,
  };

  openModal = () => {
    this.setState({ open: true });
  }

  closeModal = () => {
    this.setState({ open: false });
  }

  render() {
    // https://stackoverflow.com/questions/52249390/property-xyz-does-not-exist-on-type-readonly-children-reactnode-rea
    const { title, caption, src } = this.props;
    return (
      <div>
        <Modal
          open={this.state.open}
          onClose={this.closeModal}
          center={true}
          styles={{ modal: { padding: 0 }}}
          showCloseIcon={true}
        >
          <img src={src} alt={title} />
          <div style={{ padding: 10 }}>
            <span style={{ fontSize: 18, fontWeight: 'bold' }}>{title}</span>
            <br />
            {caption}
          </div>
        </Modal>
        <img
          src={src}
          alt={title}
          onClick={this.openModal}
        />
      </div>
    );
  }
}

export default LightboxImage;
