import { useParams } from 'react-router-dom';
import './Project.css'

export default function Project() {
  const { id } = useParams();

  return (
    <section className="project">
      <h1>Project {id}</h1>
    </section>
  );
}