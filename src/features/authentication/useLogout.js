import { useMutation, useQueryClient } from '@tanstack/react-query'
import { logout as logoutApi } from '../../services/apiAuth'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

export function useLogout() {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const { mutate: logout, isLoading: isLoggingout } = useMutation({
    mutationFn: () => logoutApi(),
    onSuccess: () => {
      //清除query中的cache
      queryClient.removeQueries()

      //在这个例子中，replace 的作用是在用户注销后，将浏览器的历史记录中的当前条目替换为登录页面的条目。这样，用户无法通过浏览器的“后退”按钮返回到之前的页面，从而确保用户注销后无法再访问受保护的页面。
      navigate('/login', { replace: true })
      toast.success('you have successfully logged out')
    },
  })
  return { logout, isLoggingout }
}
