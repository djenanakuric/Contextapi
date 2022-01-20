import React, {createContext} from "react";


export const ThemeContext = createContext();

class ThemeContextProvider extends React.Component {
    state = {
        isDarkTheme: true,
        lightTheme: {
            text: '#222',
            backgroud: '#d8ddf1'
        },
        darkTheme: {
            text: '#fff',
            backgroud: '#5c5c5c'
        }
    };

    render () {
        return (
            <ThemeContextProvider value = { { ...this.state } }>
                {this.props.children}
            </ThemeContextProvider>
        );
    }
}

export default ThemeContextProvider;