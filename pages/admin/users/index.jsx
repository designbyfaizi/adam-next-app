import AdminLayout from "../../../layouts/adminLayout";
import styles from "../../../styles/Admin/Users.module.scss";
import { useState, useEffect } from "react";
import MaterialTable from "material-table";

const Users = ({ users }) => {
    console.log(users);

    const [columns, setColumns] = useState([
        { title: "Name", field: "name" },
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

                    <MaterialTable
                        title="Editable Preview"
                        columns={columns}
                        data={data}
                        editable={{
                            onRowAdd: (newData) =>
                                new Promise((resolve, reject) => {
                                    setTimeout(() => {
                                        setData([...data, newData]);

                                        resolve();
                                    }, 1000);
                                }),
                            onRowUpdate: (newData, oldData) =>
                                new Promise((resolve, reject) => {
                                    setTimeout(() => {
                                        const dataUpdate = [...data];
                                        const index = oldData.tableData.id;
                                        dataUpdate[index] = newData;
                                        setData([...dataUpdate]);

                                        resolve();
                                    }, 1000);
                                }),
                            onRowDelete: (oldData) =>
                                new Promise((resolve, reject) => {
                                    setTimeout(() => {
                                        const dataDelete = [...data];
                                        const index = oldData.tableData.id;
                                        dataDelete.splice(index, 1);
                                        setData([...dataDelete]);

                                        resolve();
                                    }, 1000);
                                }),
                        }}
                    />
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
