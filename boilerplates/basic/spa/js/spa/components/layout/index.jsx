import Header from './Header';
import Footer from './Footer';
import styles from '../../styles/style.css';
import CSSModules from 'react-css-modules';

const App = ({ children }) => (
  <div>
    <Header />

    <div styleName="mainContainer">
      { children }
    </div>

    <Footer />
  </div>
);

export default CSSModules(styles)(App);
