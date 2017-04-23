/**
 * Created by davidchains on 4/17/17.
 */
import React,{ Component } from 'react';
import {Text} from 'react-native';
import firebase from 'firebase';
import {CardSection, Card, Button, Input, Spinner} from './common'

class LoginForm extends Component {

    state = { email: '', password: '', error: '', loading: false};

    onButtonPress(){
        const { email, password, error, loading } = this.state;

        console.log(this.state);
        this.setState({ error: ' ' , loading: true});
        console.log(this.state);

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(this.onLoginSuccess.bind(this))
                .catch(this.onFailsLogin.bind(this));
        });
    }

    onFailsLogin(){
        this.setState({ error: 'Autentication Failed', loading: false} );

    }

    onLoginSuccess(){
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: ''
        });

    }

    renderButton(){
        if (this.state.loading){
            return <Spinner size="small" />
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Log In
            </Button>
        );
    }

    render () {
        return (
            <Card>
                <CardSection>
                    <Input
                        placeholder="user@yourdomainemail.com"
                        label="Email"
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        placeHolder="password"
                        label="password"
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                </CardSection>

                <Text style={styles.errorStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    {this.renderButton() }
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

export default LoginForm;