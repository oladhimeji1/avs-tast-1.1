import { useEffect, useState } from "react";
import './todo.css';  

const Todo = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };
        fetchUsers();
    }, []);

    return (
        <div className="todo-container">
            <h2>User List</h2>
            <div className="card-container">
                {users.map(user => (
                    <div className="user-card" key={user.id}>
                        <h3>{user.name}</h3>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Phone:</strong> {user.phone}</p>
                        <p><strong>Website:</strong> <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>
                        <p><strong>Company:</strong> {user.company.name}</p>
                        <p><strong>Address:</strong> {user.address.street}, {user.address.city}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Todo;
