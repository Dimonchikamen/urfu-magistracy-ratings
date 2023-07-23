import { Familirization } from "./Familirization";
import { Compensation } from "./Compensation";
import { Competition } from "./Competition";
import { Institute } from "./Institute";
import { Marks } from "./Marks";
import { Status } from "models/Status";

export type UserInfo = {
    applications: ApplicationInfo[];
    regnum: number;
    snils: string;
};

type ApplicationInfo = {
    achievs: number;
    avgm: number;
    compensation: Compensation;
    competition: Competition;
    edu_doc_original: boolean; // original document or no
    familirization: Familirization;
    institute: Institute;
    is_without_tests: boolean;
    marks: Marks;
    priority: number;
    program: string;
    speciality: string;
    status: Status;
    status_epgu: "";
    total_mark: number;
};
