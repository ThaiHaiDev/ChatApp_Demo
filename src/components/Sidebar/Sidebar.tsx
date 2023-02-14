import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../redux/store';

import './Sidebar.scss';

const Sidebar = () => {
    const userSigning = useSelector((state: RootState) => state.user);
    
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
                    Đăng nhập
                </Link>
                <Link to="/" className="link-user">
                    Trò chuyện
                </Link>
                <Link to="/" className="link-user">
                    Đăng xuất
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
