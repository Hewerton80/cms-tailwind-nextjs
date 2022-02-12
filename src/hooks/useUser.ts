import { useCallback, useState } from 'react'
import { apiBase } from '../services/apiBase'
import { Callback, IPaginationRecords, IQueryParansPaginations } from '../types/Global'
import { IUser } from '../types/User'

interface IGetUserParans extends IQueryParansPaginations {}
interface ISubmitUserParans extends IUser {}

export function useUser() {
  const [usersRecords, setUsersRecords] =
    useState<IPaginationRecords<IUser> | undefined>(undefined)

  const [usersMenssageError, setUsersMenssageError] = useState('')
  const [submitUserError, setSubmitUserError] = useState({} as ISubmitUserParans)

  const [isLoagingUsers, setIsLoagingUsers] = useState(false)
  const [isSubmitingUsers, setIsSubmitingUsers] = useState(false)

  const getUsers = useCallback(async (userParans: IGetUserParans) => {
    setUsersMenssageError('')
    setIsLoagingUsers(true)
    try {
      const response = await apiBase.get('/admin/users', { params: userParans })
      setUsersRecords(response.data)
    } catch (err) {
      setUsersMenssageError('Ops... Falha ao carregar informações!')
    }
    setIsLoagingUsers(false)
  }, [])

  const createUser = useCallback(
    async (
      { ...createUserParans }: ISubmitUserParans,
      callbackSuccess?: Callback,
      callbackError?: Callback
    ) => {
      setIsSubmitingUsers(true)
      setSubmitUserError({})
      if (!createUserParans.about) {
        delete createUserParans.about
      }
      if (!createUserParans.website) {
        delete createUserParans.website
      }
      try {
        await apiBase.post('/admin/users', createUserParans)
        callbackSuccess?.()
      } catch (err: any) {
        // console.log(Object.getOwnPropertyDescriptors(err))
        if (err?.response?.data?.fieldsErros) {
          setSubmitUserError(err?.response?.data?.fieldsErros)
        } else if (err?.response?.status === 409) {
          setSubmitUserError({ email: 'Já existe um usuário cadastrado com esse email' })
        } else {
          callbackError?.()
        }
      }
      setIsSubmitingUsers(false)
    },
    []
  )

  return {
    usersRecords,
    usersMenssageError,
    isLoagingUsers,
    isSubmitingUsers,
    submitUserError,
    getUsers,
    createUser,
  }
}
