import react,{useState,useEffect}from 'react';
function UsersList(){
const[users,setUsers]=useState([]);
useEffect(())=>{
fetch('https://jsonplaceHolder.typicode.com/users')
.then(response=>response.json())
.then(data=>setUsers(data))
.catch(error=>console.error('Error fetching data:',error));
}[]);
return{
<div style={{padding:'20px}}>
<h2>Userlist(Fetched using useEffect)</h2>
<ul>
{users.map(user=>(
<li key={user.id}>
<strong>{user.name}</strong>-{user.email}
</li>
))}
</ul>
</div>
);
}
exportdefaultUsersList;