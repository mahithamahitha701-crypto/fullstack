import React from'react';
function Userinfo({name,age}){
return(
<p classname="Info">
User <strong>{name}</strong>is <strong>{age}</strong>years old.</p>
);
}
export default UserInfo;