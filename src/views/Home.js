import Hero from '../components/Hero.js';
import List from '../components/List.js';

function Home() {
  return (
    <div
      className="md:container md:mx-auto min-h-screen"
      style={{ maxWidth: '800px' }}
    >
      <Hero />
      <List title="Lomba" />
    </div>
  );
}

export default Home;
