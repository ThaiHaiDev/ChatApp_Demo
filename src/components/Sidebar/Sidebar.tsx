import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import userSlice from '../../pages/SigninPage/userSlice';
import { RootState } from '../../redux/store';

import './Sidebar.scss';

const Sidebar = () => {
    const userSigning = useSelector((state: RootState) => state.user);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSignout = async () => {
        await dispatch(userSlice.actions.logout());
        navigate('/signin');
    }
    
    return (
        <div className="sidebar">
            <div className="info-user">
                <div className="avatar-info">
                    <img
                        src={userSigning.current?.avatar}
                        alt=""
                        className="img-avatar"
                    />
                </div>

                <div className="name-info">
                    <h3 className='name-user'>{userSigning.current.fullName}</h3>
                </div>
                <br />
                <hr />
                <Link to="/signin" className="link-user">
                    <img src="https://img.icons8.com/windows/24/null/login-rounded-right.png" alt='icon-sidebar' className='icon-sidebar'/>
                    Đăng nhập
                </Link>
                <Link to="/" className="link-user">
                    <img src="https://img.icons8.com/ios/24/null/filled-chat.png" alt='icon-sidebar' className='icon-sidebar'/>
                    Trò chuyện
                </Link>
                <p className="link-user" onClick={handleSignout}> 
                    <img src="https://img.icons8.com/external-tanah-basah-detailed-outline-tanah-basah/24/null/external-sign-out-user-interface-tanah-basah-detailed-outline-tanah-basah.png" alt='icon-sidebar' className='icon-sidebar'/>
                    Đăng xuất
                </p>
            </div>
        </div>
    );
};

export default Sidebar;
