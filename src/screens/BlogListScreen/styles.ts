import styled from "styled-components/native";

type TContainer = {
    padding: number;
}

export const Container = styled.View<TContainer>`
    padding-top: ${p => p.padding}px;
    padding-left: 20px;
    padding-right: 20px;
    background-color: #202529;
    flex: 1;
`

export const PostNumber = styled.Text`
    color: #FFF;
    margin: 20px 10px;
`

export const SearchInput = styled.TextInput.attrs({
    placeholderTextColor: '#FFF'
})`
    margin-top: 20px;
    padding: 20px;
    color: #FFF;
    background-color: #4C555C;
    border-radius: 10px;
`
export const NewPostButton = styled.TouchableOpacity`
    padding: 20px;
    border-radius: 10px;
    background-color: #1BC6B4;
    position: absolute;
    right: 5%;
    left: 5%;
    bottom: 2%;
    z-index: 999;
`