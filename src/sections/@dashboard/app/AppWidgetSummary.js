import PropTypes from 'prop-types';
// @mui
import { Card, Typography, CardContent, CardHeader, CardActions, IconButton } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// components

AppWidgetSummary.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  autor: PropTypes.string,
  view: PropTypes.string,
};

export default function AppWidgetSummary({ title, color = 'info', autor, view, handlerOnCheck, id}) {
  return (
    <Card
      sx={{
        textAlign: 'center',
        color: (theme) => theme.palette[color].darker,
        bgcolor: (theme) => theme.palette[color].lighter,
      }}
    >
      <CardHeader title={title} />
      <CardContent>
        <Typography variant="subtitle2" sx={{ textAlign: 'left', opacity: 0.72 }}>
          {`De: ${autor}`}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {
          view === 'view' 
          ?<IconButton disabled><CheckCircleIcon /></IconButton>
          :<IconButton onClick={()=>handlerOnCheck(id)}><CheckCircleIcon /></IconButton>
        }
      </CardActions>

    </Card>
  );
}

