import React from "react";
import logo from "./logo.svg";
import "./App.css";

const ownRequire = (window as any).require;
let appVersion = "0.0.1";
if (ownRequire) {
  const { remote } = ownRequire("electron");
  appVersion = remote.app.getVersion();
}

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        Version: {appVersion}
      </header>
    </div>
  );
};

export default App;
