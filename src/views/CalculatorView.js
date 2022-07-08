import Container from '@mui/material/Container';
// import Grid from '@mui/material/Grid';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Calculator from '../components/Calculator';

const CalculatorView = () => (
  <section>
    <Container sx={{ mt: '48px' }}>
      <Grid container columnSpacing={2}>
        <Grid item md={6} sx={{ pb: '48px' }}>
          <Typography variant="h2" component="p">
            Let&apos;s do some math!
          </Typography>
        </Grid>
        <Grid item md={6}>
          <Calculator />
        </Grid>
      </Grid>
    </Container>
  </section>
);

export default CalculatorView;
