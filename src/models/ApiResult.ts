import { UserInfo } from "./UserInfo";

export type ApiResult = {
    count: number;
    items: UserInfo[];
    last_import: string;
    page: number;
    size: number;
}