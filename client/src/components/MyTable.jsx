import React from 'react'
import { useTable,useSortBy } from 'react-table'
export const MyTable=({columns,data})=> {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data },useSortBy)

  return (
    <div className="container">
    <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th
                // Add the sorting props to control sorting:
                {...column.getHeaderProps(column.getSortByToggleProps())}
                style={{
                  border: 'solid 3px red',
                  background: 'aliceblue',
                  color: 'black',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                }}
              >
                {column.render('Header')}
                {/* Add a sort direction indicator */}
                <span>
                    {column.isSorted ? column.isSortedDesc ? ' 🔽' : ' 🔼' : '🪄'}
                  </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      padding: '10px',
                      border: 'solid 1px gray',
                      background: 'papayawhip',
                    }}
                  >
                    {cell.render('Cell')}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
    </div>
  )
}
