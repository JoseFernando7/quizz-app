import Link from 'next/link'
import NavStyle from './Navbar.module.css'

const links = [{
  label: 'Home',
  route: '/'
},
{
  label: 'Category',
  route: '/category'
},
{
  label: 'Difficulty',
  route: '/difficulty'
},
{
  label: 'Random Quiz',
  route: '/random'
}]

function Navbar () {
  return (
    <header className={NavStyle.header}>
      <nav>
        <ul className={NavStyle.navigation}>
          {links.map(({ label, route }) => (
            <li key={route}>
              <Link href={route}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
