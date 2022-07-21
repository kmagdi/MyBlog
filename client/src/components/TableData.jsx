import React,{useContext} from 'react'
import {CategContext} from '../contexts/CategContext'
import { PostsContext } from '../contexts/PostsContext';
import { UsersContext } from '../contexts/UsersContext';
import {MyTable} from './MyTable'

export const TableData=({tableName})=> {
    const {categ}= useContext(CategContext)
    const {posts}= useContext(PostsContext)
    const {users}=useContext(UsersContext)

  console.log(tableName,users,'-TableData')
    const categData = React.useMemo(() =>categ,[categ])
    const postsData = React.useMemo(() =>posts,[posts])
    const usersData = React.useMemo(() =>users,[users])

    const categColumns = React.useMemo(() => [
        {
          Header: 'Azonosító',
          accessor: 'id', // accessor is the "key" in the data
        },
        {
          Header: 'Kategóriák',
          accessor: 'name', // accessor is the "key" in the data
        },
      ],[])

      const postsColumns = React.useMemo(() => [
        {
          Header: 'Azonosító',
          accessor: 'id', // accessor is the "key" in the data
        },
        {
          Header: 'Cím',
          accessor: 'title', // accessor is the "key" in the data
        },
      ],[])

      const usersColumns = React.useMemo(() => [
        {
          Header: 'Azonosító',
          accessor: 'id', // accessor is the "key" in the data
        },
        {
          Header: 'Email cím',
          accessor: 'email', // accessor is the "key" in the data
        },
        {
          Header: 'Felhasználó',
          accessor: 'username', // accessor is the "key" in the data
        },
        {
          Header: 'Besorolás',
          accessor: 'role', // accessor is the "key" in the data
        },
        {
          Header: 'Sztátusz',
          accessor: 'status', // accessor is the "key" in the data
        },
      ],[])
  
  return (
    <div>
       <MyTable data={tableName==='categorie'? categData : (tableName==='users'? usersData : postsData)} 
                columns={tableName==='categorie'? categColumns: (tableName==='users'? usersColumns : postsColumns)}/>
    </div>
  )
}
