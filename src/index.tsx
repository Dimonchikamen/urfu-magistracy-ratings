import { createRoot } from "react-dom/client";
import { ErrorBoundary } from "app/providers/ErrorBoundary";
import { ThemeProvider } from "app/providers/ThemeProvider";
import App from "./app/App";

import "./index.scss";
import { Provider } from "react-redux";
import { store } from "redux/store";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <ErrorBoundary>
        <Provider store={store}>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </Provider>
    </ErrorBoundary>
);
