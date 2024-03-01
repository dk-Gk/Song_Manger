import { Button, Container, ErrorDisplay, Form, Input, InputBox, Text, Wrapper } from "../styles/StyledComponents"
import { NavLink, useNavigate } from 'react-router-dom';
import { ZodType, z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { registerStart } from "../features/auth/authSlice";
import { Header } from "../components";

type User = {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const RegisterPage = () => {
    const user = useAppSelector(state => state.auth.user);
    const error = useAppSelector(state => state.auth.error);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const userSchema: ZodType<User> = z.object({
        username: z.string().min(2, "name must have atleast 2 characters"),
        email: z.string().email(),
        password: z.string().min(5, "password must be atleast 5 characters"),
        confirmPassword: z.string().min(5, "password must be atleast 5 characters"),
    }).refine(data => data.password === data.confirmPassword, {
        message: "passwords must match",
        path: ["confirmPassword"],
    })

    const { register, handleSubmit, formState: { errors } } = useForm<User>({ resolver: zodResolver(userSchema) })

    const onsubmit = (data: User) => {
        console.log(data);
        dispatch(registerStart(data));
        if (user && !error) {
            navigate('/dashboard');
        }
        else return;
    }
    return (
        <>
            {/* <Header /> */}
            <Header />
            <Container>
                <Wrapper >
                    {error && <ErrorDisplay>{error}</ErrorDisplay>}
                    <h2>Registration</h2>
                    <Form onSubmit={handleSubmit(onsubmit)}>
                        <InputBox>
                            <Input type="text" placeholder="Enter your username" {...register("username")} />
                        </InputBox>
                        {errors.username && <ErrorDisplay>{`* ${errors.username.message}`}</ErrorDisplay>}
                        <InputBox >
                            <Input type="text" placeholder="Enter your email" {...register("email")} />
                        </InputBox>
                        {errors.email && <ErrorDisplay>{`* ${errors.email.message}`}</ErrorDisplay>}
                        <InputBox >
                            <Input type="password" placeholder="Create password" {...register("password")} />
                        </InputBox>
                        {errors.password && <ErrorDisplay>{`* ${errors.password.message}`}</ErrorDisplay>}
                        <InputBox >
                            <Input type="password" placeholder="Confirm password" {...register("confirmPassword")} />
                        </InputBox>
                        {errors.confirmPassword && <ErrorDisplay>{`* ${errors.confirmPassword.message}`}</ErrorDisplay>}
                        <InputBox >
                            <Button type="Submit" value="Register Now" />
                        </InputBox>
                        <Text>
                            <h3>Already have an account? <NavLink to='/login'>Login now</NavLink></h3>
                        </Text>
                    </Form>
                </Wrapper>
            </Container>
        </>
    )
}

export default RegisterPage