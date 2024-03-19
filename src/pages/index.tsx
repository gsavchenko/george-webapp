import { Home } from '../modules/home';
import '@radix-ui/themes/styles.css';

export const Head = (): JSX.Element => <title>George Savchenko</title>;

const SiteIndex = (): JSX.Element => <Home />;

export default SiteIndex;
