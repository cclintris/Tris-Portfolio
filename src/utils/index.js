import Home from '../pages/Home'
import About from '../pages/About'
import Blogs from '../pages/Blogs'
import Contact from '../pages/Contact'
import Portfolios from '../pages/Portfolios'
import Resume from '../pages/Resume'

export const get_Route_JSX_According_to_Path = (path) => {
  switch (path) {
    case '/':
      return <Home />
    case '/about':
      return <About />
    case '/blogs':
      return <Blogs />
    case '/contact':
      return <Contact />
    case '/portfolios':
      return <Portfolios />
    case '/resume':
      return <Resume />
    default:
      console.error('No such route!')
      break
  }
}
