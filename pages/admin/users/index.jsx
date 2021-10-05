import AdminLayout from "../../../layouts/adminLayout";
import styles from "../../../styles/Admin/Users.module.scss";
import { useState, useEffect } from "react";

const Users = ({ users }) => {
    console.log(users);

    const [columns, setColumns] = useState([
        { title: "Full Name", field: "cust_fullName" },
        {
            title: "Surname",
            field: "surname",
            initialEditValue: "initial edit value",
        },
        { title: "Birth Year", field: "birthYear", type: "numeric" },
        {
            title: "Birth Place",
            field: "birthCity",
            lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
        },
    ]);

    const [data, setData] = useState([
        { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
        {
            name: "Zerya Betül",
            surname: "Baran",
            birthYear: 2017,
            birthCity: 34,
        },
    ]);

    return (
        <>
            <AdminLayout>
                <main className={styles.main}>
                    <h1>Manage Users</h1>
                    {/* {users.map((user) => (
                    <div key={user._id}>
                        <h3>{user.cust_fullName}</h3>
                    </div>
                ))} */}

                    
                </main>
            </AdminLayout>
        </>
    );
};

export default Users;

export const getStaticProps = async () => {
    const response = await fetch(
        "https://adam-web-api.herokuapp.com/admin/users"
    );
    const data = await response.json();

    return {
        props: {
            users: data.users,
        },
    };
};
