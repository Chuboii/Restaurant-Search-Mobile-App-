import DataProvider, {
  DataContext
} from "./context/DataContext";
import DetectNetwork from "./utils/detect network/DetectNetwork";
import RenderScreens from "./utils/render screens/RenderScreens";
import React, {
  useContext,
  useEffect
} from 'react'
import NetInfo from "@react-native-community/netinfo";

export default function App() {


  return (
    <DataProvider>
      <DetectNetwork />
        <RenderScreens />

    </DataProvider>
  );
}