import {
  ButtonItem,
  definePlugin,
  PanelSection,
  ServerAPI,
  staticClasses,
} from "decky-frontend-lib";
import { VFC, useState  } from "react";
import { FaShip } from "react-icons/fa";


import * as backend from "./backend";



const Content: VFC = () => {
  let [result, setResult] = useState<number>(0);

  return (
    <PanelSection title="Panel Section">

      <ButtonItem
          layout="below"
          onClick={async () => {
            await backend.add().then((result1) => {setResult(result1); console.log("pidor!!!!!@34-")});
            // setResult(result+1);
            // console.log("pidor!!!!!@34-");
          }}
        >
          Router + {result}
        </ButtonItem>  

        <ButtonItem
          layout="below"
          onClick={async () => {
            await backend.addTMP().then((result1) => {setResult(result1); console.log("pidor!!!!!@34-")});
            // setResult(result+1);
            // console.log("pidor!!!!!@34-");
          }}
        >
          Router2 + {result}
        </ButtonItem>  

    </PanelSection>
  );
};



export default definePlugin((serverApi: ServerAPI) => {
  backend.setServerAPI(serverApi);

  return {
    title: <div className={staticClasses.Title}>Example Plugin</div>,
    content: <Content/>,
    icon: <FaShip />,
    onDismount() {
      
    },
  };
});
