import { useCallback, useState } from 'react'
import { apiBase } from '../services/apiBase'
import { IPaginationRecords, IQueryParansPaginations } from '../types/Global'
import { IUser } from '../types/User'

interface IGetUserParans extends IQueryParansPaginations {}

export function useUser() {
  const [usersRecords, setUsersRecords] = useState<IPaginationRecords<IUser> | undefined>(
    undefined
  )
  const [usersError, setUsersError] = useState('')

  const getUsers = useCallback(async (userParans: IGetUserParans) => {
    setUsersError('')
    try {
      const response = await apiBase.get('/admin/users', { params: userParans })
      setUsersRecords(response.data)
    } catch (err) {
      setUsersError('Ops... Falha ao carregar informações!')
    }
  }, [])

  return { usersRecords, usersError, getUsers }
}
