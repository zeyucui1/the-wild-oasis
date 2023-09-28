import { useMutation, useQueryClient } from '@tanstack/react-query'
import { login as loginApi } from '../../services/apiAuth'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

export function useLogin() {
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      //set data in react-query cache
      queryClient.setQueryData(['user'], user.user)
      toast.success(`Welcome ${user.user.email.split('@')[0]}`)
      navigate('/dashboard', { replace: true })
    },
    onError: (error) => {
      console.log(error)
      toast.error('provide valid credentials')
    },
  })
  return { login, isLoading }
}
