import DataProvider from "./context/DataContext";
import DetectNetwork from "./utils/detect network/DetectNetwork";
import RenderScreens from "./utils/render screens/RenderScreens";

export default function App() {


  return (
    <DataProvider>
      <DetectNetwork />
        <RenderScreens />

    </DataProvider>
  );
}