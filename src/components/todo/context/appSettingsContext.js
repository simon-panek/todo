import reactDomTestUtilsProductionMin from "react-dom/cjs/react-dom-test-utils.production.min";
import React, {setState, useState} from 'react';

export const AppSettingsContext = React.createContext();

class AppSettings extends React.Component{
  constructor(props){
    super(props);
    this.state={
      maxDisplay: 4,
      sortMethod: 'assignee',
      hide: true,
    }
  }

  render(){
    return (
      <AppSettingsContext.Provider value={this.state}>
        {this.props.children}
      </AppSettingsContext.Provider>
    )
  }
}

export default AppSettings;