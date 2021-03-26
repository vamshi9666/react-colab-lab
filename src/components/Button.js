import React from 'react';

class CustomButton extends React.Component {
  render() {
    const {title, onClick} = this.props;
    return (
      <button type="button" onClick={onClick} className="btn btn-primary">
        {title}
      </button>
    );
  }
}

export default CustomButton;
