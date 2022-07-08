// import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

const navItems = [
  { title: 'Home', link: '/' },
  { title: 'Calculator', link: '/calculator' },
  { title: 'Quotes', link: '/quotes' },
];

const Navbar = () => (
  <AppBar component="nav" position="relative">
    <Container>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        >
          Math Magicians
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {navItems.map(({ title, link }) => (
            <Button key={title} href={link} sx={{ color: '#fff' }}>
              {title}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
);

export default Navbar;
