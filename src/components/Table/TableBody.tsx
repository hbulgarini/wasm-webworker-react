import React from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import type { Users } from '../types';

type Props = {
  results: Array<Users>;
};

export function MuiTableBody({ results }: Props) {
  return (
    <TableBody>
      {results.map(({ firstName, lastName, email, phone }: Users) => (
        <TableRow key={`${firstName}+${lastName}`}>
          <TableCell align="left">{firstName}</TableCell>
          <TableCell align="left">{lastName}</TableCell>
          <TableCell align="left">{email}</TableCell>
          <TableCell align="left">{phone}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}

export default MuiTableBody;
