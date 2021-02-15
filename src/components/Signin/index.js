import React from 'react';
import { 
    Container, 
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    TextLink
} from './SignInElements'

const SignIn = () => {

    return (
        <Container>
        
            <FormWrap>
                <Icon to='/'>dolla</Icon>
                <FormContent>
                    <Form>
                        <FormH1>Sign in your account</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email'  required/>
                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput type='password'  required/>
                        <FormButton type='submit'>Log In</FormButton>
                        <TextLink to="/forgot-password">Forgot Password?</TextLink>
                    </Form>
                </FormContent>

            </FormWrap>
        </Container>
    )
}

export default SignIn;
