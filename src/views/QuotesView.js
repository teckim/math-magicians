import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const QuotesView = () => (
  <section>
    <Container sx={{ pt: '48px' }}>
      <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: '500px' }}>
        <Grid item sm={8}>
          <Typography variant="h5" paragraph component="p" align="center">
            Mathematics is not about numbers, equations, computations, or
            algorithms: it is about understanding.
          </Typography>
          <Typography paragraph component="p" align="center"> - William Paul Thurston - </Typography>
        </Grid>
      </Grid>
    </Container>
  </section>
);

export default QuotesView;
