import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";


const AllUsers = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://recycle-bin-server-rose.vercel.app/users');
            const data = await res.json();
            return data;
        }
    });


    const handleMakeAdmin = id => {
        fetch(`https://recycle-bin-server-rose.vercel.app/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('Make admin successful.')
                    refetch();
                }
            })
    }
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Admin</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {

                        users.map((user, i) =>
                            user.role === "seller" ?
                                <tr key={user._id}>
                                    <th>{i + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user?.role !== 'admin' && <button className='btn btn-xs btn-primary' onClick={() => handleMakeAdmin(user._id)}>Make Admin</button>}</td>
                                    <td><button className='btn btn-xs btn-danger'>Delete</button></td>
                                </tr> : null
                        )
                    }

                </tbody>
            </table>
        </div>
    );
};

export default AllUsers;