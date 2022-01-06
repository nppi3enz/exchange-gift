import Setup from "./Setup";
import SelectGift from "./SelectGift";
import { GiftProvider } from "./contexts/gift";
import "./App.css";

function App() {
  return (
    <GiftProvider>
      <div className="App">
        {/* <Setup /> */}
        <SelectGift />
      </div>
    </GiftProvider>
  );
}

export default App;
