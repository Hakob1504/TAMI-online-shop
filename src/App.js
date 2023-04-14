import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Router from './routes/router';
import ScrollToTop from './components/scroll-top/ScrollToTop';
function App() {
  return (
    <div className="App">
      <Header />
      <Router />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
