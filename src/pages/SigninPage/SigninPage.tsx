import { SubmitHandler, useForm } from 'react-hook-form';
import Sidebar from '../../components/Sidebar/Sidebar';

import './SigninPage.scss';

import UserData from '../../mockdata/userData';
import { useDispatch } from 'react-redux';
import userSlice from './userSlice';

const SigninPage = () => {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<any>();

    const dispatch = useDispatch();

    const onSubmit: SubmitHandler<any> = async (data: any) => {
        const userSignin = UserData.find((user) => {
            return user.email === data.email;
        });
        if (userSignin !== undefined) {
            await dispatch(userSlice.actions.signin(userSignin));
            reset();
            document.location = '/';
        }
    };

    return (
        <div className="signin__page">
            <div className="row" style={{ height: '100%' }}>
                <div className="col l-2 m-0 c-0" style={{ background: '#64b5f6' }}>
                    <Sidebar />
                </div>
                <div className="col l-10 m-12 c-12" style={{ background: '#f5f5f5' }}>
                    <h1 className='title__page'>Signin</h1>
                    <div className="signin__form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label className='label-signin'>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className='signin__form-input'
                                    {...register('email', {
                                        required: 'Email được yêu cầu',
                                        pattern: {
                                            value: /^\S+@\S+$/i,
                                            message: 'Đây không phải là một email hợp lệ',
                                        },
                                    })}
                                />
                                {errors.email && (
                                    <p className="message_error">{`${errors.email && errors.email?.message}`}</p>
                                )}
                            </label>

                            <label className='label-signin'>
                                <input
                                    className="signin__form-input"
                                    type='password' 
                                    placeholder="Enter password"
                                    {...register('password', {
                                        required: 'Mật khẩu được yêu cầu',
                                        maxLength: {
                                            value: 16,
                                            message: 'Mật khẩu chỉ giới hạn 16 kí tự',
                                        },
                                    })}
                                />
                                {errors.password && (
                                    <p className="message_error">{`${errors.password?.message}`}</p>
                                )}
                            </label>
                            <button type="submit" disabled={isSubmitting} className='btn-signin'>
                                Đăng nhập
                            </button>
                        </form>
                        <img src='https://png.pngtree.com/png-vector/20221214/ourmid/pngtree-phone-chat-apps-png-image_6523592.png' alt='' className="bg-img"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SigninPage;
