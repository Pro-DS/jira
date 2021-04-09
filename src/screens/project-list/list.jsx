import React from 'react';

const list = ({ list, users }) => {
  return (
    <table>
      <thead>
        <tr>
          <td>名称</td>
          <td>负责人</td>
        </tr>
      </thead>
      <tbody>
        {
          list.map(item => (
            <tr key={item.id} >
              <td>{item.name}</td>
              <td>{users.find(user => user.id === item.personId)?.name || '位置'}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export default list;
