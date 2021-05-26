import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as BiIcons from 'react-icons/bi'
import * as BsIcons from 'react-icons/bs'
import * as FiIcons from 'react-icons/fi'
import * as MdIcons from 'react-icons/md'
export const NavbarData = [
    {
        title:'Home',
        path:'/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title :'Create User',
        path:'/',
        icon: <BsIcons.BsPersonPlus />,
        cName:'nav-text'
    },
    {
        title:'Create Bill',
        path:'/',
        icon: <AiIcons.AiOutlinePlusCircle />,
        cName:'nav-text'
    },
    {
        title:'All Users',
        path:'/',
        icon: <FiIcons.FiUsers/>,
        cName:'nav-text'
    },
    {
        title:'Create E-Meter',
        path:'/',
        icon: <MdIcons.MdCreateNewFolder/>,
        cName:'nav-text'
    },
    {
        title:'Show Meter',
        path:'/',
        icon: <BiIcons.BiShow/>,
        cName:'nav-text'
    },
    {
        title:'Update Payment',
        path:'/',
        icon: <FaIcons.FaFileInvoiceDollar/>,
        cName:'nav-text'
    }
]