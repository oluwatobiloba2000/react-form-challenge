import React from 'react';

const User = (props) =>(
   <tfoot>
  <tr>
    <td>{props.index}</td>
    <td>{props.email}</td>
    <td>{props.birthday.toDateString()}</td>
    <td>{props.age}</td>
    <td>{props.hobby}</td>
  </tr>
   </tfoot>
)

export default User;