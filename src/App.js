import { AppProvider } from "./contexts";
import { OverviewProvider } from "./contexts/overviewContext";
import { SidebarProvider } from "./contexts/sidebarContext";
import MainRoute from "./routes";

function App() {
  return (
    <div className="!font-plusJakataSans tracking-[-0.5px]">
      <AppProvider>
        <SidebarProvider>
          <OverviewProvider>
            <MainRoute />
          </OverviewProvider>
        </SidebarProvider>
      </AppProvider>
    </div>
  );
}

export default App;
