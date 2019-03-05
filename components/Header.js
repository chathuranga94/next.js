import Link from 'next/link'

const linkStyle = {
  marginRight: 15,
  fontSize: 20
}

const Header = () => (
    <div>
        {/* component under Link should accept onClick action */}
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>About</a>
        </Link>
        <Link href="/posts">
          <a style={linkStyle}>Posts</a>
        </Link>
    </div>
)

export default Header