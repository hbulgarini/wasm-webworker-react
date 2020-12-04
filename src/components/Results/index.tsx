import React from 'react';
import TableBody from '../Table/TableBody';
import Table from '../Table/Table';
import TableHeader from '../Table/TableHeader';
import type { Users } from '../types';
import { headers } from '../constants';

type Props = {
  results: Array<Users>;
};

export function Results({ results }: Props) {
  return (
    <Table>
      <>
        <TableHeader headers={headers} />
        <TableBody results={results} />
      </>
    </Table>
  );
}

export default Results;
