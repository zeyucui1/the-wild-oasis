import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteBooking as deleteBookingApi } from '../../services/apiBookings'
import toast from 'react-hot-toast'
export function useDeleteBooking() {
  const queryClient = useQueryClient()
  const { isLoading: isDeleting, mutate: deleteBooking } = useMutation({
    mutationFn: deleteBookingApi,
    onSuccess: (data) => {
      toast.success(`Booking deleted successful`)
      queryClient.invalidateQueries({ active: true })
    },
    onError: (err) => toast.error(err.message),
  })
  return { deleteBooking, isDeleting }
}
