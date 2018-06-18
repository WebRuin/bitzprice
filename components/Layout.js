import Head from 'next/head';
import Navbar from './Navbar';

////////////////////////////////////
// Avalible Themes - for line: 14 //
////////////////////////////////////
const darklyTheme = "https://bootswatch.com/4/flatly/bootstrap.min.css"
const flaylyTheme = "https://bootswatch.com/4/flatly/bootstrap.min.css"
const luxTheme = "https://bootswatch.com/4/lux/bootstrap.min.css"
const slateTheme = "https://bootswatch.com/4/slate/bootstrap.min.css"
const solarTheme = " https://bootswatch.com/4/solar/bootstrap.min.css"

const Layout = (props) => (
  <div>
    <Head>
      <title>Tim's BitzPrice</title>
      <link rel="stylesheet" href={luxTheme}/>
    </Head>
    <Navbar/>
    <div className="container">
      {props.children}
    </div>
  </div>
);

export default Layout;