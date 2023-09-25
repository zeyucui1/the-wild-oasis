import Spinner from '../../ui/Spinner'
import CabinRow from './CabinRow'
import { useCabins } from './useCabins'
import Table from '../../ui/Table'
import Menus from '../../ui/Menus'
import { useSearchParams } from 'react-router-dom'
import Empty from '../../ui/Empty'

const CabinTable = () => {
  const { isLoading, cabins } = useCabins()
  const [searchParams] = useSearchParams()
  if (isLoading) return <Spinner />
  if (!cabins.length) return <Empty resourceName="cabin" />
  // filter function
  const filterValue = searchParams.get('discount') || 'all'
  let filteredCabins
  if (filterValue === 'all') filteredCabins = cabins
  if (filterValue === 'no-discount')
    filteredCabins = cabins.filter((cabin) => cabin.discount === 0)
  if (filterValue === 'with-discount')
    filteredCabins = cabins.filter((cabin) => cabin.discount > 0)

  //sort function
  const sortBy = searchParams.get('sortBy') || 'name-asc'
  const [field, direction] = sortBy.split('-')
  const modifier = direction === 'asc' ? 1 : -1
  function compareText(a, b) {
    return a[field].localeCompare(b[field]) * modifier
  }
  function compareNumbers(a, b) {
    return (a[field] - b[field]) * modifier
  }
  const sortedCabins =
    typeof cabins[0][field] === 'number'
      ? filteredCabins.sort(compareNumbers)
      : filteredCabins.sort(compareText)

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount </div>
          <div></div>
        </Table.Header>
        <Table.Body
          data={sortedCabins}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        />
      </Table>
    </Menus>
  )
}

export default CabinTable
