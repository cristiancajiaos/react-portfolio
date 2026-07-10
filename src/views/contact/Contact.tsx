import './Contact.css'

export default function() {
  const links = [
    {type: 'cristiancajiaos@outlook.com', link: 'mailto:cristiancajiaos@outlook.com'},
    {type: 'Linkedin', link: 'https://www.linkedin.com/in/cristiancajiaos/'},
    {type: 'Github', link: 'https://github.com/cristiancajiaos'}
  ]
  return (
    <section className="contact">
      {links.map((link) => 
        <a href={link.link}>
          {link.type}
        </a>
      )}
    </section>
  );
}