import { useCallback, useState } from 'react'
import { apiBase } from '../services/apiBase'
import { IPaginationRecords, IQueryParansPaginations } from '../types/Global'
import { IUser } from '../types/User'

interface IGetUserParans extends IQueryParansPaginations {}

export function useUser() {
  const [usersRecords, setUsersRecords] = useState<IPaginationRecords<IUser> | undefined>(
    undefined
  )

  const getUsers = useCallback(async (userParans: IGetUserParans) => {
    try {
      const response = await apiBase.get('/admin/users', { params: userParans })
      setUsersRecords(response.data)
    } catch (err) {}
  }, [])

  return { usersRecords, getUsers }
}
