import { useState } from 'react';
import DATA from './data';
import { getCoreRowModel, useReactTable } from '@tanstack/react-table';

const columns = [
  {
    accessorKey: 'task',
    header: 'Task',
    cell: (props) => <p>{props}</p>,
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: (props) => <p>{props}</p>,
  },
  {
    accessorKey: 'due',
    header: 'Due',
    cell: (props) => <p>{props}</p>,
  },
  {
    accessorKey: 'notes',
    header: 'Notes',
    cell: (props) => <p>{props}</p>,
  },
];

const TaskTable = () => {
  const [data, setData] = useState(DATA);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  console.log(table.getHeaderGroups());
  return (
    <div>
      <div>
        <th></th>
      </div>
    </div>
  );
};

export default TaskTable;
