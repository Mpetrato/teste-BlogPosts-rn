import styled from "styled-components/native";

type TContainer = {
    padding: number;
}

export const Container = styled.View<TContainer>`
    padding: ${p => p.padding}px;
    background-color: #202529;
    flex: 1;
`
export const NewPostText = styled.Text`
    color: #FFF;
    font-size: 20px;
    font-weight: 600;
    margin-top: 40px;
    margin-bottom: 20px;
`

export const NewTextInput = styled.TextInput.attrs({
    placeholderTextColor: '#FFF'
})`
    color: #FFF;
    padding: 15px;
    margin: 15px 0;
    border-radius: 10px;
    background-color: #4C555C;
`
export const RegisterButton = styled.TouchableOpacity`
    padding: 10px;
    background-color: #4C555C;
    width: 40%;
    border-radius: 10px;
`
export const RegisterButtonText = styled.Text`
    color: #FFF;
    text-align: center;
`