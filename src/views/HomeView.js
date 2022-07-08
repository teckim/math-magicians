import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const HomeView = () => (
  <section>
    <Container sx={{ mt: '48px' }}>
      <Card>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
          >
            Welcome to our page!
          </Typography>
          <Typography
            paragraph
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec lorem
            eget leo faucibus fermentum. Etiam vel lacus lorem. Sed aliquet, nisi quis
            tincidunt pretium, odio ex congue mauris, quis tristique justo ipsum sed
            urna. Aliquam suscipit, purus eu faucibus gravida, est metus egestas quam,
            id feugiat elit ante vel ante. Aliquam a erat vitae tortor scelerisque
            venenatis. Sed tristique orci nisl. Nam rutrum magna et massa hendrerit
            sagittis. Nam luctus odio sit amet eros semper volutpat. Etiam a posuere
            nunc.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  </section>
);

export default HomeView;
