import { Link } from 'react-router-dom';

import './Sidebar.scss';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="info-user">
                <div className="avatar-info">
                    <img
                        src="https://avatars.githubusercontent.com/u/85157423?s=400&u=3ae0bdfd3720e1c68eaabe4a0049555583250c24&v=4"
                        alt=""
                        className="img-avatar"
                    />
                </div>

                <div className="name-info">
                    <h3 className='name-user'>Thai Hai</h3>
                </div>
                <br />
                <hr />
                <Link to="/account/edit-account" className="link-user">
                    Thông tin cá nhân
                </Link>
                <Link to="/account/active-account" className="link-user">
                    Kích hoạt tài khoản
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
