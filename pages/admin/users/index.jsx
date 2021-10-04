import AdminLayout from "../../../layouts/adminLayout";

const Users = ({users}) => {
    console.log(users);
    return (
        <>
            <AdminLayout>
                <h1>Users</h1>
                {users.map(user  => (
                    <div key={user._id}>
                        <h3>{user.cust_fullName}</h3>
                    </div>
                ))}
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
