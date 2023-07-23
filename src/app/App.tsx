import { FC, Suspense } from "react";
import { useTheme } from "app/providers/ThemeProvider";
import { Header } from "widgets/Header";
import { MainPage } from "pages/MainPage";

import { classNames } from "shared/lib/classNames/classNames";
import s from "./App.module.scss";

const App: FC = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames("app", theme)}>
            <Suspense fallback="">
                <div className={s.page_wrap}>
                    <div className={s.wrap_content}>
                        <Header />
                        <div className={s.page_content}>
                            <MainPage />
                        </div>
                    </div>
                </div>
            </Suspense>
        </div>
    );
};

export default App;
