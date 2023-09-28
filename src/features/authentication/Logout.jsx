import { HiArrowRightOnRectangle } from 'react-icons/hi2'
import ButtonIcon from '../../ui/ButtonIcon'
import { useLogout } from './useLogout'

import SpinnerMini from '../../ui/SpinnerMini'

const Logout = () => {
  const { logout, isLoggingout } = useLogout()
  return (
    <ButtonIcon disabled={isLoggingout} onClick={logout}>
      {isLoggingout ? <SpinnerMini /> : <HiArrowRightOnRectangle />}
    </ButtonIcon>
  )
}

export default Logout
