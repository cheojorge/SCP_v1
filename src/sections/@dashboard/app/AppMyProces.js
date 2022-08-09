// @mui
import PropTypes from 'prop-types';
import { Box, Stack, Link, Card, Button, Divider, Typography, CardHeader } from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';

// components
import Iconify from '../../../components/Iconify';

// ----------------------------------------------------------------------

AppMyProces.propTypes = {
  title: PropTypes.string,
  list: PropTypes.array.isRequired,
};

export default function AppMyProces({ list, title }) {
  return (
    <Card sx={{ maxHeight: 460, overflow: 'auto' }}>
      <CardHeader title={title} />
        <Stack spacing={3} sx={{ p: 3, pr: 0 }}>
          {list.map((data,idx) => (
            <NewsItem key={idx} data={data} />
          ))}
        </Stack>
      <Divider />
      <Box sx={{ p: 2, textAlign: 'right' }}>
        <Button size="small" color="inherit" endIcon={<Iconify icon={'eva:arrow-ios-forward-fill'} />}>
          View all
        </Button>
      </Box>
    </Card>
  );
}

// ----------------------------------------------------------------------

NewsItem.propTypes = {
  data: PropTypes.shape({
    proceso: PropTypes.string,
    tipo: PropTypes.string,
    fase: PropTypes.string,
  }),
};

function NewsItem({ data }) {
  const { proceso, tipo, fase } = data;

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <ArticleIcon/>
      <Box sx={{ minWidth: 240, flexGrow: 1 }}>
        <Link color="inherit" variant="subtitle2" underline="hover" noWrap>
          {proceso}
        </Link>

        <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
          {tipo}
        </Typography>
      </Box>

      <Typography variant="caption" sx={{ pr: 3, flexShrink: 0, color: 'text.secondary' }}>
        {fase}
      </Typography>
    </Stack>
  );
}
