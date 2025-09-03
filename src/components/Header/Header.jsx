import "./Header.css";
import { NavLink } from 'react-router';
import { Dropdown, Space, Avatar } from 'antd';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import useAuth from '../../hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logout } from '../../slices/authSlice';
import useAdmin from "../../hooks/useAdmin";

const Header = () => {
    const isAuth = useAuth();
    const isAdmin = useAdmin();
    const dispatch = useDispatch();
    const items = [
        {
            label: <NavLink to="/profile">Profile</NavLink>,
            key: '0'
        },
        {
            type: 'divider'
        },
        {
            label: <span onClick={() => dispatch(logout())}><LogoutOutlined /> Logout</span>,
            key: '1'
        }
    ]

    return (
        <header className='header'>
            <nav className='main-menu'>
                <NavLink to='/'>Home</NavLink>
                {isAuth && isAdmin && <NavLink to="/articles/create">Create Articles</NavLink>}
                {isAdmin && isAuth && <NavLink to="/articles/table">Article Table</NavLink>}
            </nav>
            {isAuth ? (
                <Dropdown menu={{ items }} trigger={['click']}>
                    <a onClick={(e) => e.preventDefault()}>
                        <Space>
                            <Avatar icon={<UserOutlined />} />
                        </Space>
                    </a>
                </Dropdown>) : (
                <nav className='auth-menu'>
                    <NavLink to='/login'>Login</NavLink>
                    <NavLink to='/register'>Register</NavLink>
                </nav>)}
        </header>
    );
}

export default Header;
