import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const ManageUser = () => {

    const navigate = useNavigate();

    const [userList, setUserList] = useState([]);

    const fetchUserData = async () => {
        const res = await fetch('http://localhost:5000/place/getall');
        console.log(res.status);
        if(res.status === 200){
            const data = await res.json();
            console.log(data);
            setUserList(data);
        }
    };

    useEffect(() => {
     fetchUserData();
    }, []);

    const deleteUser = async (id) => {
        console.log(id);
        const res = await fetch('http://localhost:5000/place/delete/'+id, {method : 'DELETE'});

        if(res.status === 200){
            fetchUserData();
            toast.success('Place Deleted Successfully 😁');
        }
    }

    const displayUsers = () => {
        return <table className='table table-dark table-striped'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th style={{width: '40%'}}>Description</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    userList.map((user) => (
                        <tr>
                            <td>{user._id}</td>
                            <td>
                                <img height={40} src={'http://localhost:5000/'+user.image} />
                            </td>
                            <td>{user.name}</td>
                            <td>{user.description}</td>
                            <td>
                                <button className='btn btn-danger' onClick={() => { deleteUser(user._id) }}>Delete Place</button>
                            </td>
                            <td>
                                <button className='btn btn-primary' onClick={ () => { navigate('/updateuser/'+user._id) } } >Edit Place</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    }

  return (
    <div>
        <h1 className='text-center'>Manage Places Data</h1>
        <hr />
        <div className='container'>
            {displayUsers()}
        </div>
    </div>
  )
}

export default ManageUser;