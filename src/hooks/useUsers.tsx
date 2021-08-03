import { useState, useEffect, useRef }from 'react';
import { reqResApi } from '../api/reqRes';
import { ReqResList, User } from '../interfaces/reqRes';

export const useUsers = () => {
    const [users, setUsers] = useState<User[]>([])

    const pageRef = useRef(1)

    useEffect(() => {
        // API call
        loadUsers()
    }, [])

    const loadUsers = async() => {
        const resp = await reqResApi.get<ReqResList>('/users', {
            params: {
                page: pageRef.current,
            }
        })
        if ( resp.data.data.length > 0 ) {
            setUsers(resp.data.data);
        } else {
            pageRef.current--;
            alert('No more registered')
        }
    }

    const nextPage = () => {
        pageRef.current++;
        loadUsers()
    }

    const prevPage = async() => {
      if (pageRef.current > 1) {
        pageRef.current--;
        loadUsers()
      } else {
          alert('This is the first page')
      }
    }

    return {
            users: users,
            nextPage: nextPage,
            prevPage: prevPage,
        }
}
