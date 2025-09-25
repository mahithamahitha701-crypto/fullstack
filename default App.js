import React from'react';
import UserGreeting from'./UserGreeting';
import Userinfo from'./Userinfo';
import './App.css';
function App(){
const user={
name:'Mahi',
age:19
};
return(
<div classNmae="app-container">
<div classname="card">
<h2>Sharing Data Using Props</h2>
<UserGreeting name={user.name}/>
<Userinfo name={user.name}age={user.age}/>
</div>
</div>
);
}
export default App;
