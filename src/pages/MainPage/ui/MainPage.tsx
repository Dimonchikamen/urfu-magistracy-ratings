import { FC, useEffect, useState } from "react";
import { UserInfo } from "models/UserInfo";

const MainPage: FC = () => {
    const [data, setData] = useState<UserInfo[]>([]);
    // const { data, isLoading, error } = useGetInstitutesQuery({ page: 1, size: 20 });

    useEffect(() => {
        fetch("http://localhost:5000/api", {
            headers: {
                [`Access-Control-Allow-Credentials`]: "true",
                "Access-Control-Allow-Origin": "*",
            },
        })
            .then(res => res.json())
            .then((res: UserInfo[]) =>
                setData(res.filter(i => i.applications.some(a => a.speciality.includes(".04."))))
            );
    }, []);

    return (
        <div>
            {data.map(item => {
                return (
                    <div key={item.regnum}>
                        {item.applications.map((appl, i) => {
                            return <div key={i}>{appl.speciality}</div>;
                        })}
                    </div>
                );
            })}
        </div>
    );
};

export default MainPage;
