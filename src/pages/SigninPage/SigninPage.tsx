import Sidebar from '../../components/Sidebar/Sidebar';

import './SigninPage.scss';

const SigninPage = () => {
    return (
        <div className="signin__page">
            <div className="row" style={{ height: '100%' }}>
                <div className="col l-2 m-0 c-0" style={{ background: 'red' }}>
                    <Sidebar />
                </div>
                <div className="col l-10 m-12 c-12" style={{ background: '#f5f5f5' }}>
                    <h1>Signin</h1>
                </div>
            </div>
        </div>
    );
};

export default SigninPage;
