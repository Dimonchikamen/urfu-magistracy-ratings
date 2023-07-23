import { FC } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

import { classNames } from "shared/lib/classNames/classNames";
import s from "./Header.module.scss";

interface INavbarProps {
    className?: string;
}

export const Header: FC<INavbarProps> = ({ className }) => {
    return (
        <div className={classNames(s.header, className)}>
            <ul className={s.customizers}>
                <li>
                    <ThemeSwitcher />
                </li>
            </ul>
        </div>
    );
};
