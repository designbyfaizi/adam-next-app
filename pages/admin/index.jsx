import router, { useRouter } from "next/router";
import { useEffect } from "react";

const Admin = () => {
    useEffect(() => {
        router.push("/admin/login");
    }, []);
    return <>Admin Page</>;
};

export default Admin;
