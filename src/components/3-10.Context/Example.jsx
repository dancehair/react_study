import React, { Component } from 'react';
import { ThemeContext, themes } from './ThemeContext';
import ThemedButton from './ThemedButton';

// Context
// 컴포넌트 트리 제약 -> Props drilling 의 한계 해소
// 재사용성 -> Context 를 사용하면 재사용하기 어려움
// API  -> createContext / Provider / Consumer
// useContext -> Consumer 대체

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
    };
    this.toggleTheme = () => {
      this.setState(prev => ({
        theme: prev.theme === themes.dark ? themes.light : themes.dark,
      }));
    };
  }
  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          <ThemedButton changeTheme={this.toggleTheme} />
          <ThemeContext.Consumer>
            {theme => <div style={{ height: 300, width: 300, backgroundColor: theme.background }}></div>}
          </ThemeContext.Consumer>
        </ThemeContext.Provider>
        <ThemedButton />
      </div>
    );
  }
}

export default Example;
