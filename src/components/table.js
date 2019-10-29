import React from 'react';
import User from './userData';

const Table = (props) =>(
     (<div className="table">
         <table>
           <thead>
            <tr>
                <th>No</th>
                <th>Email</th>
                <th>Birthday</th>
                <th>Age</th>
                <th>Hobby</th>
            </tr>
         </thead>
         {props.UserData.length === 0 && <tfoot><tr><td>No User </td><td>Fill the form and submit</td></tr></tfoot>}
         {props.UserData.map((info, index)=> <User email={info.email} key={index} index={index} birthday={info.birthday} age={info.age} hobby={info.hobby}/> )}
       </table>

     </div>)

)

export default Table;
