import React from "react";

class MenuItems extends React.Component {
  constructor(props) {
    super(props);
    this.menuListRef = React.createRef();
  }
  componentDidMount = () => {
    console.log("mounted menu items");
    document.addEventListener("mousedown", this.handleClickOutside);
  };
  componentWillUnmount = () => {
    console.log("unmounted menu items");
    document.removeEventListener("mousedown", this.handleClickOutside);
  };
  handleClickOutside = (event) => {
    if (this.menuListRef && !this.menuListRef.current.contains(event.target)) {
      this.props.onClose();
    }
  };
  render() {
    const { items } = this.props;
    return (
      <ul
        ref={this.menuListRef}
        style={{
          backgroundColor: "white",
          boxShadow: "10px 10px 10px #000",
          listStyle: "none",
          padding: "8px",
        }}
      >
        {items.map((item) => {
          return (
            <li key={item.text}>
              <button
                type="button"
                onClick={() => {
                  item.onClick();
                }}
              >
                {item.text}
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default MenuItems;
