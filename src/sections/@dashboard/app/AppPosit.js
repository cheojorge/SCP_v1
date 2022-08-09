import PropTypes from 'prop-types';
// @mui
import { Card, CardHeader, Grid } from '@mui/material';

// components
import AppWidgetSummary from './AppWidgetSummary';

// ----------------------------------------------------------------------

AppPosit.propTypes = {
  title: PropTypes.string,
  list: PropTypes.array,
};

export default function AppPosit({ title, list}) {
  return (
    <Card sx={{ maxHeight: 325, overflow: 'auto' }}>
      <CardHeader title={title} />
      
      <Grid sx={{ p:2}} container  spacing={2}>
        {list.map((posit,idx) => (
          <Grid key={idx} item xs={12} sm={6} md={6}>
            <AppWidgetSummary autor={posit.from} title={posit.nota}/>
          </Grid>
        ))}
      </Grid>
     
    </Card>
  );
}



