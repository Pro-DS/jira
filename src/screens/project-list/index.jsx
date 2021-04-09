import React, { useState, useEffect, } from 'react';
import Search from './search';
import List from './list';
import * as qs from 'qs';
import { cleanObject } from '../../utils/index';
const apiUrl = process.env.REACT_APP_URL_API;

const ProjectListScreen = () => {

  const [param, setParam] = useState({
    name: '',
    personId: '',
  });
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(async response => {
      if(response.ok) {
        setList(await response.json()); 
      }
    })
  }, [param]);

  useEffect(() => {
    fetch(`${apiUrl}/users`).then(async response => {
      if(response.ok) {
        setUsers(await response.json());
      }
    })
  }, []); 

  return (
    <div>
      <Search users={users} param={param} setParam={setParam} />
      <List users={users} list={list} />
    </div>
  )
}

export default ProjectListScreen;
