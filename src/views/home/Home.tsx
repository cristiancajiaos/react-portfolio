import './Home.css'
import profile from '../../assets/profile.jpg';

export default function Home() {
  return (
    <section className="home">
      <div className="text-center">
        <img src={profile}/>
      </div>
    </section>
  );
}