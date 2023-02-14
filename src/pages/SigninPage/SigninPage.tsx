import { useState } from 'react';
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

    const [show, setShow] = useState<boolean>(false);

    const dispatch = useDispatch();

    const onSubmit: SubmitHandler<any> = (data: any) => {
        const userSignin = UserData.find(user => { return user.email === data.email})
        if (userSignin !== undefined) {
            dispatch(userSlice.actions.signin(userSignin));
            reset();
        }
    };

    return (
        <div className="signin__page">
            <div className="row" style={{ height: '100%' }}>
                <div className="col l-2 m-0 c-0" style={{ background: 'red' }}>
                    <Sidebar />
                </div>
                <div className="col l-10 m-12 c-12" style={{ background: '#f5f5f5' }}>
                    <h1>Signin</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <label>
                            <input
                                type="email"
                                placeholder="Email"
                                {...register('email', {
                                    required: 'Email được yêu cầu',
                                    pattern: {
                                        value: /^\S+@\S+$/i,
                                        message: 'Đây không phải là một email hợp lệ',
                                    },
                                })}
                            />
                            {errors.email && (
                                <span className="message_error">{`${errors.email && errors.email?.message}`}</span>
                            )}
                        </label>

                        <label>
                            <input
                                className="signup__form-input"
                                type={!show ? 'password' : 'text'}
                                placeholder="Enter password"
                                {...register('password', {
                                    required: 'Mật khẩu được yêu cầu',
                                    maxLength: {
                                        value: 16,
                                        message: 'Mật khẩu chỉ giới hạn 16 kí tự',
                                    },
                                })}
                            />
                            {errors.password && <span className="message_error">{`${errors.password?.message}`}</span>}
                        </label>
                        <button type="submit" disabled={isSubmitting}>
                            Đăng nhập
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SigninPage;
