import React from 'react';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import styles from './styles.module.scss';

export type Props = {
  children: React.ReactChild | React.ReactChild[];
};

export function MuiTable({ children }: Props) {
  return (
    <TableContainer className={styles.table} component={Paper}>
      <Table aria-label="simple table">{children}</Table>
    </TableContainer>
  );
}

export default MuiTable;
