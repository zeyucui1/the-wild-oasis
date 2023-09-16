import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'

const StyledSelect = styled.select`
  font-size: 1.4rem;
  padding: 0.8rem 1.2rem;
  border: 1px solid
    ${(props) =>
      props.type === 'white'
        ? 'var(--color-grey-100)'
        : 'var(--color-grey-300)'};
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  font-weight: 500;
  box-shadow: var(--shadow-sm);
`
const Select = ({ options, value, onChange, ...props }) => {

  return (
    // 这里有个小trick 如果指向把props往下传可以用{...props}形式传参并且接收
    <StyledSelect value={value} onChange={onChange} {...props}>
      {options.map((option) => (
        <option value={option.value} key={option.key}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  )
}

export default Select
