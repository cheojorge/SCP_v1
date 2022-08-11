import PropTypes from 'prop-types';
import { useState } from 'react';
// @mui
import {
  Card,
  CardHeader,
  Grid,
  IconButton,
  Tooltip,
  Typography,
  Box,
  Modal,
  FormControl,
  TextField,
  FormControlLabel,
  Switch,
  Checkbox,
  Autocomplete,
  Button
} from '@mui/material';
// components
import AddIcon from '@mui/icons-material/Add';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
// ----------------------------------------------------------------------
import AppWidgetSummary from './AppWidgetSummary';

AppPosit.propTypes = {
  title: PropTypes.string,
  list: PropTypes.array,
};

export default function AppPosit({ title, list, setPosit }) {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  function BasicModal() {
    const [open, setOpen] = useState(false);
    const [forUser, setForUser] = useState('');
    const [nota, setNota] = useState('')
    const [check, setCheck] = useState(false)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleChange = (event) => {
      setForUser(event.target.value);
    };
    const handleChangeNota = (event) => {
      setNota(event.target.value);
    };

    const user = [
      { id: 1, name: 'Sharon Lopez' },
      { id: 2, name: 'Tatiana Torres' },
      { id: 3, name: 'Jefferson Ayala' }
    ]

    const grups = [
      { id: 1, name: 'Planificacion' },
      { id: 2, name: 'Compras' },
      { id: 3, name: 'Bodega' },
    ]

    const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
    const checkedIcon = <CheckBoxIcon fontSize="small" />;

    const handleNewNote = () =>{
      
    }


    return (
      <div>
        <Tooltip placement="left" title={"Añadir"}>
          <IconButton onClick={handleOpen}>
            <AddIcon />
          </IconButton>
        </Tooltip>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Nueva Nota
            </Typography>
            <FormControlLabel control={<Switch checked={check} onChange={() => setCheck(!check)} />} label={check ? 'Individual' : 'Grupal'} />

            <FormControl sx={{ mt: 2 }} fullWidth>
              <Autocomplete
                multiple
                id="para"
                options={check ? user : grups}
                disableCloseOnSelect
                getOptionLabel={(option) => option.name}
                renderOption={(props, option, { selected }) => (
                  <li {...props}>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
                    />
                    {option.name}
                  </li>
                )}

                renderInput={(params) => (
                  <TextField {...params} label="Para" placeholder="Para" />
                )}
              />
              <TextField sx={{ mt: 2, mb: 2 }} value={nota} id="nota" label="Nota" variant="outlined" onChange={handleChangeNota} />
            </FormControl>
            <AppWidgetSummary autor={'Sharon Lopez'} title={nota} view={'view'} />
            <Button onClick={handleNewNote} sx={{mt:2}}>Crear</Button>
            <Button onClick={handleClose} sx={{mt:2}}>Cancelar</Button>
          </Box>
        </Modal>
      </div>
    );
  }

  const handlerOnCheck = (id) => {
    setPosit(list.filter(item => item.id !== id))
  }

  return (
    <Card sx={{ maxHeight: 325, overflow: 'auto' }}>
      <CardHeader
        title={title}
        action={
          <BasicModal />
        }
      />
      <Grid sx={{ p: 2 }} container spacing={2}>
        {list.map((posit, idx) => (
          <Grid key={idx} item xs={12} sm={6} md={6}>
            <AppWidgetSummary id={posit.id} autor={posit.from} title={posit.nota} view={'create'} handlerOnCheck={handlerOnCheck} />
          </Grid>
        ))}
      </Grid>
    </Card>
  );
}



