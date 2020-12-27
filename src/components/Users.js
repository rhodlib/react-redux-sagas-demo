import React , {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {actionCreators as usersActions, selector as usersSelector} from '../features/users';
import { Table } from 'antd';

const Users = () => {
    const dispatch = useDispatch();
    const {users} = useSelector((state) => usersSelector(state))
    useEffect(() => {
        dispatch(usersActions.list())
    }, [dispatch]);

    const dataSource = users.dataSource;
      
      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
        },
        {
          title: 'email',
          dataIndex: 'email',
        },
        {
          title: 'phone',
          dataIndex: 'phone',
        },
      ];
    return(
        <Table dataSource={dataSource} columns={columns} loading={users.isLoading} rowKey={"id"}/>
    )
}

export default Users