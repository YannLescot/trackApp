import React, {useContext} from 'react'
import { View, StyleSheet, } from 'react-native'
import { NavigationEvents} from 'react-navigation'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import { Context } from '../context/AuthContext'

const SigninScreen = () => {
    const {state, signin, clearErrorMessage } = useContext(Context)

    return(
        <View style={styles.container}>
            <NavigationEvents
                onWillBlur={clearErrorMessage}
            />
            <AuthForm
                headerText="Sign In to your account"
                errorMessage={state.errorMessage}
                submitButtonText="Sign in"
                onSubmit={signin}
            />
            <NavLink 
                text="Don't have an account ? Sign up"
                routeName="Signup"
            />
        </View>
    )
}

SigninScreen.navigationOptions = () => {
    return {
        headerShown: false,
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 100,
    },
})

export default SigninScreen