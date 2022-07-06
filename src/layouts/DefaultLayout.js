import PropTypes from 'prop-types';
import Navbar from '../components/Navbar';

const DefaultLayout = ({ children }) => (
  <>
    <header className="container">
      <Navbar />
    </header>
    <main>
      {children}
    </main>
  </>
);

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default DefaultLayout;
