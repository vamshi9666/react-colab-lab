import logo from "./logo.svg";
import React from "react";

import "./App.css";
import CustomButton from "./components/Button";
import MenuItems from "./components/MenuItems";

// document.addEventListener('load', () => {

// });

const initialData = new Array(10).fill({ isChecked: false, name: "Vamshi" });
const App = (props) => {
  const [data, setData] = React.useState(initialData);

  return (
    <div className="App">
      {initialData.map((item) => {
        return <div>{item.name}</div>;
      })}
    </div>
  );
};

class NavigationMenuExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
    this.menuListRef = React.createRef();
  }
  render() {
    return (
      <div className="App">
        {!this.state.menuOpen && (
          <button
            onClick={() => {
              // menuOpen = !menuOpen;
              this.setState({
                menuOpen: true,
              });
            }}
          >
            {"Open Menu"}
          </button>
        )}
        {this.state.menuOpen && (
          <MenuItems
            items={[
              {
                text: "Account",
                onClick: () => {
                  alert("account clicked");
                  this.setState({
                    menuOpen: false,
                  });
                },
              },
              {
                text: "Sign out",
                onClick: () => {
                  alert("account clicked");
                },
              },
              {
                text: "Do something",
                onClick: () => {
                  alert("account clicked");
                },
              },
            ]}
            onClose={() => {
              this.setState({
                menuOpen: false,
              });
            }}
          />
        )}
      </div>
    );
  }
}
export default NavigationMenuExample;
