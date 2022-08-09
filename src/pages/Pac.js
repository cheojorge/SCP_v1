import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Button, Card, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { visuallyHidden } from '@mui/utils';


import Iconify from '../components/Iconify';
import Page from '../components/Page';
import { UserMoreMenu } from '../sections/@dashboard/user';

const procesosData = [
  {tipo:'infima cuantia', proceso:'Proceso de prueba 1', cuatrimestre:'Primero', responsable:'Jorge Cajamarca', administrador:'Alejandro Pinargote', analista:'Diana Vargas'},
  {tipo:'Subasta Inversa', proceso:'Proceso de prueba 2', cuatrimestre:'Segundo', responsable:'Julio Enriquez', administrador:'Marcelo Proaño', analista:'Javier Diaz'},
  {tipo:'Consultoria', proceso:'Proceso de prueba 3', cuatrimestre:'Tercero', responsable:'Silvio Sabando', administrador:'Darwin Acosta', analista:'Marjurie Peralta'},
  {tipo:'infima cuantia', proceso:'Proceso de prueba 4', cuatrimestre:'Primero', responsable:'Jorge Cajamarca', administrador:'Alejandro Pinargote', analista:'Diana Vargas'},
  {tipo:'Subasta Inversa', proceso:'Proceso de prueba 5', cuatrimestre:'Segundo', responsable:'Julio Enriquez', administrador:'Marcelo Proaño', analista:'Javier Diaz'},
  {tipo:'Consultoria', proceso:'Proceso de prueba 6', cuatrimestre:'Tercero', responsable:'Silvio Sabando', administrador:'Darwin Acosta', analista:'Marjurie Peralta'},
  {tipo:'Subasta Inversa', proceso:'Proceso de prueba 7', cuatrimestre:'Primero', responsable:'Jorge Cajamarca', administrador:'Alejandro Pinargote', analista:'Diana Vargas'},
  {tipo:'infima cuantia', proceso:'Proceso de prueba 8', cuatrimestre:'Segundo', responsable:'Julio Enriquez', administrador:'Marcelo Proaño', analista:'Javier Diaz'},
]



function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'proceso',
    numeric: false,
    disablePadding: true,
    label: 'Proceso',
  },
  {
    id: 'cuatrimestre',
    numeric: true,
    disablePadding: false,
    label: 'Cuatrimestre',
  },
  {
    id: 'responsable',
    numeric: true,
    disablePadding: false,
    label: 'Responsable',
  },
  {
    id: 'administrador',
    numeric: true,
    disablePadding: false,
    label: 'Administrador',
  },
  {
    id: 'analista',
    numeric: true,
    disablePadding: false,
    label: 'Analista',
  },
  {
    id: 'tipo',
    numeric: true,
    disablePadding: false,
    label: 'Tipo',
  },
  {
    label: '',
  },
];

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align= 'center'
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
};

export default function Pac() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = procesosData.map((n) => n.proceso);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - procesosData.length) : 0;

  return (
    <Page title="Pac">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Plan Anual de Contratacion
          </Typography>
          <Button variant="contained" component={RouterLink} to="#" startIcon={<Iconify icon="eva:plus-fill" />}>
            Nuevo Proceso
          </Button>
        </Stack>
        <Card>
          <TableContainer>
            <Table
              sx={{ minWidth: 750 }}
              aria-labelledby="tableTitle"
            >
              <EnhancedTableHead
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={procesosData.length}
              />
              <TableBody>
                {stableSort(procesosData, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, idx) => {
                    return (
                      <TableRow
                        hover
                        key = {idx}
                      >
                        <TableCell
                          component="th"
                          align="center"
                          scope="row"
                        >
                          {row.proceso}
                        </TableCell>
                        <TableCell align="center">{row.cuatrimestre}</TableCell>
                        <TableCell align="center">{row.responsable}</TableCell>
                        <TableCell align="center">{row.administrador}</TableCell>
                        <TableCell align="center">{row.analista}</TableCell>
                        <TableCell align="center">{row.tipo}</TableCell>
                        <TableCell align="right">
                          <UserMoreMenu />
                        </TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={procesosData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Card>
      </Container>
    </Page>
  );
}
