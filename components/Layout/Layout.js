import Navigation from 'components/Navigation';
import layoutStyles from './layout.module.css';

export default function Layout({ children }) {
  const { container, mainContainer } = layoutStyles;
  return (
    <div className={container}>
      <Navigation />
      <main className={mainContainer}>{children}</main>
    </div>
  );
}