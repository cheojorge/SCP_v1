import PropTypes from 'prop-types';
// form
import { useForm, Controller } from 'react-hook-form';
// @mui
import { Card, Stack, Checkbox, IconButton, CardHeader, FormControlLabel, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';



AppTasks.propTypes = {
  title: PropTypes.string,
  list: PropTypes.array.isRequired,
};

export default function AppTasks({ title, list }) {
  const { control } = useForm({
    defaultValues: {
      taskCompleted: ['2'],
    },
  });

  return (
    <Card sx={{ maxHeight: 325, overflow: 'auto' }}>
      <CardHeader
        title={title}
        action={
          <Tooltip placement="left" title="Añadir">
            <IconButton >
              <AddIcon />
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

TaskItem.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  task: PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
  }),
};

function TaskItem({ task, checked, onChange }) {
  const handleDelete = () => {
    console.log('DELETE', task.id);
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




