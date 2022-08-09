import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Container from '@mui/material/Container';
import TablePagination from '@mui/material/TablePagination';
import { Button, Card, Stack } from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import TableSortLabel from '@mui/material/TableSortLabel';
import { Link as RouterLink } from 'react-router-dom';
import Page from '../components/Page';
import Iconify from '../components/Iconify';


const procesosData = [
  { fase: 'Preparatoria', tipo: 'infima cuantia', proceso: 'Proceso de prueba 1', cuatrimestre: 'Primero', responsable: 'Jorge Cajamarca', administrador: 'Alejandro Pinargote', analista: 'Diana Vargas', history: [{ fecha: '26/07/2022', actividad: 'recoleccion de informacion', usuario: 'Jorge Cajamarca' }, { fecha: '26/07/2022', actividad: 'recoleccion de informacion', usuario: 'Jorge Cajamarca' }] },
  { fase: 'Contractual', tipo: 'Subasta Inversa', proceso: 'Proceso de prueba 2', cuatrimestre: 'Segundo', responsable: 'Julio Enriquez', administrador: 'Marcelo Proaño', analista: 'Javier Diaz', history: [{ fecha: '26/07/2022', actividad: 'recoleccion de informacion', usuario: 'Jorge Cajamarca' }, { fecha: '26/07/2022', actividad: 'recoleccion de informacion', usuario: 'Jorge Cajamarca' }] },
  { fase: 'Precontractual', tipo: 'Consultoria', proceso: 'Proceso de prueba 3', cuatrimestre: 'Tercero', responsable: 'Silvio Sabando', administrador: 'Darwin Acosta', analista: 'Marjurie Peralta', history: [{ fecha: '26/07/2022', actividad: 'recoleccion de informacion', usuario: 'Jorge Cajamarca' }, { fecha: '26/07/2022', actividad: 'recoleccion de informacion', usuario: 'Jorge Cajamarca' }] },
  { fase: 'Preparatoria', tipo: 'infima cuantia', proceso: 'Proceso de prueba 4', cuatrimestre: 'Primero', responsable: 'Jorge Cajamarca', administrador: 'Alejandro Pinargote', analista: 'Diana Vargas', history: [{ fecha: '26/07/2022', actividad: 'recoleccion de informacion', usuario: 'Jorge Cajamarca' }, { fecha: '26/07/2022', actividad: 'recoleccion de informacion', usuario: 'Jorge Cajamarca' }] },
  { fase: 'Contractual', tipo: 'Subasta Inversa', proceso: 'Proceso de prueba 5', cuatrimestre: 'Segundo', responsable: 'Julio Enriquez', administrador: 'Marcelo Proaño', analista: 'Javier Diaz', history: [{ fecha: '26/07/2022', actividad: 'recoleccion de informacion', usuario: 'Jorge Cajamarca' }, { fecha: '26/07/2022', actividad: 'recoleccion de informacion', usuario: 'Jorge Cajamarca' }] },
  { fase: 'Finalizado', tipo: 'Consultoria', proceso: 'Proceso de prueba 6', cuatrimestre: 'Tercero', responsable: 'Silvio Sabando', administrador: 'Darwin Acosta', analista: 'Marjurie Peralta', history: [{ fecha: '26/07/2022', actividad: 'recoleccion de informacion', usuario: 'Jorge Cajamarca' }, { fecha: '26/07/2022', actividad: 'recoleccion de informacion', usuario: 'Jorge Cajamarca' }] },
  { fase: 'Contractual', tipo: 'Subasta Inversa', proceso: 'Proceso de prueba 7', cuatrimestre: 'Primero', responsable: 'Jorge Cajamarca', administrador: 'Alejandro Pinargote', analista: 'Diana Vargas', history: [{ fecha: '26/07/2022', actividad: 'recoleccion de informacion', usuario: 'Jorge Cajamarca' }, { fecha: '26/07/2022', actividad: 'recoleccion de informacion', usuario: 'Jorge Cajamarca' }] },
  { fase: 'Preparatoria', tipo: 'infima cuantia', proceso: 'Proceso de prueba 8', cuatrimestre: 'Segundo', responsable: 'Julio Enriquez', administrador: 'Marcelo Proaño', analista: 'Javier Diaz', history: [{ fecha: '26/07/2022', actividad: 'recoleccion de informacion', usuario: 'Jorge Cajamarca' }, { fecha: '26/07/2022', actividad: 'recoleccion de informacion', usuario: 'Jorge Cajamarca' }] },
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



function Row({ row }) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <TableRow hover sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.proceso}
        </TableCell>
        <TableCell align="center">{row.cuatrimestre}</TableCell>
        <TableCell align="center">{row.responsable}</TableCell>
        <TableCell align="center">{row.administrador}</TableCell>
        <TableCell align="center">{row.analista}</TableCell>
        <TableCell align="center">{row.tipo}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={10}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                <Typography variant="h6" gutterBottom>
                  Historial
                </Typography>
                <Button variant="contained" component={RouterLink} to="#" startIcon={<Iconify icon="eva:plus-fill" />}>
                  Nueva actividad
                </Button>
              </Stack>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Fecha</TableCell>
                    <TableCell>Actividad</TableCell>
                    <TableCell align="center">Usuario</TableCell>
                    <TableCell />
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history?.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.fecha}
                      </TableCell>
                      <TableCell>{historyRow.actividad}</TableCell>
                      <TableCell align="center">{historyRow.usuario}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

const headCells = [
  {
    label: '',
  },
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
            align='center'
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

export default function MisProcesos() {
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
    <Page title="Mis Procesos">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Mis Procesos
          </Typography>
        </Stack>
        <Card>
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 750 }}
              aria-label="collapsible table"
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
                  .map((row) => (
                    <Row key={row.proceso} row={row} />
                  ))}
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
