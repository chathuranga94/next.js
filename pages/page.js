import Layout from '../components/Layout.js'

const Page = () => (
    <p>This is /page</p>
  )
  
export default () => (<Layout page={Page}/>)

/*
import withLayout from '../lib/layout'

const Page = () => (
  <p>This is the about page</p>
)

export default withLayout(Page)
*/