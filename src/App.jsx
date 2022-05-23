import { Routes, Route, Link } from "react-router-dom";
import { LaunchList } from "./components/LaunchList";
import { LaunchDetail } from "./components/LaunchDetail"
import { Image } from '@chakra-ui/react';
import logo from './assets/spacexlogo.png'

export function App() {
  return (
    <>
      <Link to='/'>
        <Image m="4" ml="38vw" src={logo} width={400}/>
      </Link>
      <Routes>
        <Route path='/' element={<LaunchList />} />
        <Route path='launch/:launchId' element={<LaunchDetail />} />
      </Routes>
    </>
  )
}