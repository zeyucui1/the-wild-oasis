import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateBooking } from '../../services/apiBookings'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export function useCheckin() {
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const { mutate: checkin, isLoading: isCheckingIn } = useMutation({
    mutationFn: ({ bookingId, breakfast }) =>
      updateBooking(bookingId, {
        status: 'checked-in',
        isPaid: true,
        ...breakfast,
      }),
    // onsucess里的data是updateBooking返回的data
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} Check-in successful`)
      queryClient.invalidateQueries('bookings')
      navigate('/dashboard')
    },
    onError: (error) => {
      toast.error(`there was an error while checking in`)
    },
  })
  return { checkin, isCheckingIn }
}
