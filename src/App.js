import { AppProvider } from "./contexts";
import { OverviewProvider } from "./contexts/overviewContext";
import { SidebarProvider } from "./contexts/sidebarContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainRoute from "./routes";

function App() {
  return (
    <div className="!font-plusJakataSans tracking-[-0.5px]">
      <AppProvider>
        <SidebarProvider>
          <OverviewProvider>
            <MainRoute />
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </OverviewProvider>
        </SidebarProvider>
      </AppProvider>
    </div>
  );
}

export default App;
