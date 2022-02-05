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
  const [isLoagingUsers, setIsLoagingUsers] = useState(false)

  const getUsers = useCallback(async (userParans: IGetUserParans) => {
    setUsersError('')
    setIsLoagingUsers(true)
    try {
      const response = await apiBase.get('/admin/users', { params: userParans })
      setUsersRecords(response.data)
    } catch (err) {
      setUsersError('Ops... Falha ao carregar informações!')
    }
    setIsLoagingUsers(false)
  }, [])

  return { usersRecords, usersError, isLoagingUsers, getUsers }
}
