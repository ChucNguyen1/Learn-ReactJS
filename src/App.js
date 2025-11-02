import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import NavigationMenu from './components/NavigationMenu';

function App() {
  return (
    <>
    <Header/>
    <Content text="content1" />
    <Content text="content2" />
    <NavigationMenu/>
    <Footer/>
    </>
  );
}

export default App;
