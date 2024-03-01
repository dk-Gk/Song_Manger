import { useEffect, useState } from "react";
import Header from "../components/Header"
import { Button, Container, ErrorDisplay, Form, Input, InputBox, Text, Wrapper } from "../styles/StyledComponents"
import { ZodType, z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { loginStart } from "../features/auth/authSlice";
import TestHeader from "../components/Header";
import { toast } from "react-toastify";


type User = {
    email: string;
    password: string;
}

const LoginPage = () => {
    const user = useAppSelector(state => state.auth.user);
    const error = useAppSelector(state => state.auth.error);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    // useEffect(() => {
    //     if (userInfo) {
    //         navigate('/dashboard');
    //     }
    // },[navigate, userInfo])

    const userSchema: ZodType<User> = z.object({
        email: z.string().email(),
        password: z.string().min(5, "password must be at least 5 characters")
    })

    const { register, handleSubmit, formState: { errors } } = useForm<User>({ resolver: zodResolver(userSchema) })

    const onsubmit = (data: User) => {
        dispatch(loginStart(data));
        if (user && !error) {
            navigate('/dashboard');
        }
        else {
            toast.error(error)
        }
    }

    return (
        <>
            {/* <TestHeader /> */}
            <TestHeader />
            <Container>
                <Wrapper >
                    {/* {error && <ErrorDisplay>{error}</ErrorDisplay>} */}
                    <h2>Login</h2>
                    <Form onSubmit={handleSubmit(onsubmit)}>
                        <InputBox >
                            <Input type="text" placeholder="Enter your email" {...register("email")} />
                        </InputBox>
                        {errors.email && <ErrorDisplay>{`* ${errors.email.message}`}</ErrorDisplay>}
                        <InputBox >
                            <Input type="password" placeholder="password" {...register("password")} />
                        </InputBox>
                        {errors.password && <ErrorDisplay>{`* ${errors.password.message}`}</ErrorDisplay>}
                        <InputBox >
                            <Button type="Submit" value="Login" />
                        </InputBox>
                        <Text>
                            <h3>Don't you have an account? <NavLink to='/register'>Register now</NavLink></h3>
                        </Text>
                    </Form>
                </Wrapper>
            </Container>
        </>
    )
}

export default LoginPage