import React from "react";
import ReactDOM from "react-dom";
//@ts-ignore
import {BpmnView} from './diagramViewer'
//@ts-ignore
import ModelerCreator from "./diagramCreator/index";
import "./styles.css";

export function App() {
  return (
    <div className="App">
      {/** This is for viewer only 
      https://stackoverflow.com/questions/42708361/integrating-bpmn-js-to-modeler-the-react-component
      */}
      <BpmnView />

      {/** This is for Model creator 
      Comment out the nextblock will reveal the above Viewer
      */}
      {/* <div id="js-canvas-container">
        <ModelerCreator />
      </div> */}
    </div>
  );
}
