import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <>
      <header>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {/* Static logo image above the title */}
          <img
            src="/logo.png"
            alt="Anugya Trust Logo"
            style={{
              maxHeight: '100px',
              marginBottom: '1rem',
              borderRadius: '8px',
              objectFit: 'contain'
            }}
          />
          <h1>Anugya Trust</h1>
        </div>
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
