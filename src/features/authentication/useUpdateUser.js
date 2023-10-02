import { useMutation, useQueryClient } from '@tanstack/react-query'

import toast from 'react-hot-toast'
import { updateCurrentUser } from '../../services/apiAuth'

export const useUpdateUser = () => {
  const queryClient = useQueryClient()
  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: ({ user }) => {
      toast.success('user account successfully updated')
      queryClient.setQueryData(['user'], user)
      // queryClient.invalidateQueries({
      //   queryKey: ['user'],
      // })
    },
    onError: (err) => {
      toast.error(err.message)
    },
  })
  return { updateUser, isUpdating }
}
