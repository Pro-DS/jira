import React from 'react';

const search = ({ param, setParam, users, }) => {
  return (
    <form>
      <div>
        <input type={'text'} value={param.name} onChange={evt => setParam({...param, name: evt.target.value})} />
        <select value ={param.personId} onChange={env => setParam({...param, personId: env.target.value})} >
          <option value={''} >负责人</option>
          {
            users.map((item, ind) => <option key={ind} value={item.id} >{item.name}</option>)
          }
        </select> 
      </div>
    </form>
  )
}

export default search;
