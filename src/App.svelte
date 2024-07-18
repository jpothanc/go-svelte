<script>
	
   import { Router, Route, Link } from 'svelte-routing';
   import Home from './pages/Home.svelte';
   import About from './pages/About.svelte';
  import NavBar from './components/NavBar.svelte';
  import Footer from './components/Footer.svelte';

</script>


<Router>
  <NavBar />
  <Route path="/" component={Home} />
  <Route path="/about" component={About} />
  <Footer />
</Router>