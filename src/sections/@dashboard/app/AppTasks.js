import PropTypes from 'prop-types';
import { useState } from 'react';
// form
import { useForm, Controller } from 'react-hook-form';
// @mui
import { Card, Stack, Checkbox, IconButton, CardHeader, FormControlLabel, Tooltip, TextField, Button, Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';



AppTasks.propTypes = {
  title: PropTypes.string,
  list: PropTypes.array.isRequired,
};

export default function AppTasks({ title, list, setTaskDash }) {
  const [newTask, setTaskNew] = useState(false)
  const [task, setTask] = useState('')
  const { control } = useForm({
    defaultValues: {
      taskCompleted: ['2'],
    },
  });

  const handleOnCreate = () => {
    setTaskDash([...list, { id: list.length + 1, label: task }])
    setTaskNew(false)
    setTask('')

  }

  TaskItem.propTypes = {
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    task: PropTypes.shape({
      id: PropTypes.number,
      label: PropTypes.string,
    }),
  };

  function TaskItem({ task, checked, onChange }) {
    const handleDelete = () => {
      setTaskDash(list.filter(item => item.id !== task.id))
    };

    return (
      <Stack
        direction="row"
        sx={{
          px: 2,
          py: 0.75,
          ...(checked && {
            color: 'text.disabled',
            textDecoration: 'line-through',
          }),
        }}
      >
        <FormControlLabel
          control={<Checkbox checked={checked} onChange={onChange} />}
          label={task.label}
          sx={{ flexGrow: 1, m: 0 }}
        />
        <Tooltip placement="left" title="Eliminar">
          <IconButton onClick={() => handleDelete()}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>

      </Stack>
    );
  }








  return (
    <Card sx={{ maxHeight: 325, overflow: 'auto' }}>
      <CardHeader
        title={title}
        action={
          <Tooltip placement="left" title={newTask ? 'Salir' : "Añadir"}>
            <IconButton onClick={() => {
              setTaskNew(!newTask)
              setTask('')
            }}>
              {newTask ? <CloseIcon /> : <AddIcon />}
            </IconButton>
          </Tooltip>
        }
      />
      <Controller
        name="taskCompleted"
        control={control}
        render={({ field }) => {
          const onSelected = (task) =>
            field.value.includes(task) ? field.value.filter((value) => value !== task) : [...field.value, task];

          return (
            <>
              {newTask &&
                <>
                  <Grid container spacing={2}>
                    <Grid item xs={6} sm={6} md={8} lg={6}>
                      <TextField
                        id="tarea"
                        label="Tarea"
                        variant="outlined"
                        sx={{ ml: 3, mt: 1 }}
                        onChange={e => setTask(e.target.value)}
                        value={task}
                      />
                    </Grid>
                    <Grid item xs={2} sm={2} md={2} lg={2}>
                      <Button onClick={() => handleOnCreate()} variant="contained" endIcon={<AddIcon />}>
                        Crear
                      </Button>
                    </Grid>
                  </Grid>
                </>
              }

              {list.map((task) => (
                <TaskItem
                  key={task.id}
                  task={task}
                  checked={field.value.includes(task.id)}
                  onChange={() => field.onChange(onSelected(task.id))}
                />
              ))}
            </>
          );
        }}
      />
    </Card>
  );
}

// ----------------------------------------------------------------------






