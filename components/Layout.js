import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <>
      <header>
        <h1>Anugya Trust</h1>
        <nav>
          <Link href="#about">About</Link>
          <Link href="#donate">Donate</Link>
          <Link href="#contact">Contact</Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        &copy; {new Date().getFullYear()} Anugya Trust. All rights reserved.
      </footer>
    </>
  )
}
