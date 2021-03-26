import logo from './logo.svg';
import React from 'react';

import './App.css';
import CustomButton from './components/Button';

// document.addEventListener('load', () => {

// });

const initialData = new Array(10).fill({isChecked: false, name: 'Vamshi'});
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

class MenuItems extends React.Component {
  constructor(props) {
    super(props);
    this.menuListRef = React.createRef();
  }
  componentDidMount = () => {
    console.log('mounted menu items');
    document.addEventListener('mousedown', this.handleClickOutside);
  };
  componentWillUnmount = () => {
    console.log('unmounted menu items');
    document.removeEventListener('mousedown', this.handleClickOutside);
  };
  handleClickOutside = (event) => {
    if (this.menuListRef && !this.menuListRef.current.contains(event.target)) {
      this.props.onClose();
    }
  };
  render() {
    const {items} = this.props;
    return (
      <ul
        ref={this.menuListRef}
        style={{
          backgroundColor: 'white',
          boxShadow: '10px 10px 10px #000',
          listStyle: 'none',
          padding: '8px',
        }}>
        {items.map((item) => {
          return (
            <li key={item.text}>
              <button
                type="button"
                onClick={() => {
                  item.onClick();
                }}>
                {item.text}
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

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
        <button
          onClick={() => {
            // menuOpen = !menuOpen;
            this.setState({
              menuOpen: !this.state.menuOpen,
            });
          }}>
          {this.state.menuOpen ? 'Hide' : 'Open'}
          {'   Menu'}
        </button>
        {this.state.menuOpen && (
          <>
            <MenuItems
              items={[
                {
                  text: 'Account',
                  onClick: () => {
                    alert('account clicked');
                  },
                },
                {
                  text: 'Sign out',
                  onClick: () => {
                    alert('account clicked');
                  },
                },
                {
                  text: 'Do something',
                  onClick: () => {
                    alert('account clicked');
                  },
                },
              ]}
              onClose={() => {
                this.setState({
                  menuOpen: false,
                });
              }}
            />
          </>
        )}
      </div>
    );
  }
}
export default NavigationMenuExample;
