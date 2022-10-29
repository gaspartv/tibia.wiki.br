import AnimationProvider from "./contexts/AutoAnimation";
import RouterMain from "./routes";
import { GlobalStyled } from "./styles/Global";

function App() {
  return (
    <>
      <GlobalStyled />
      <AnimationProvider>
        <RouterMain />
      </AnimationProvider>
    </>
  );
}

export default App;
