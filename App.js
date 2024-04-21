import DataProvider from "./context/DataContext";
import DetectNetwork from "./utils/detect network/DetectNetwork";
import RenderScreens from "./utils/render screens/RenderScreens";


export default function App() {
  const bannerError = () => {
    console.log("An error");
    return;
  }

  return (
    <DataProvider>

      <DetectNetwork />
        <RenderScreens />

    </DataProvider>
  );
}