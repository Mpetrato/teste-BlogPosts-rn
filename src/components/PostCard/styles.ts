import styled from "styled-components/native";

export const Container = styled.View`
    background-color: #4C555C;
    padding: 20px;
    margin: 10px;
    border-radius: 10px;
`
export const ContainerWrapper = styled.View`
    margin-right: 10px;
    flex-direction: row;
`
export const TitleText = styled.Text`
    color: #FFF;
    font-size: 20px;
    font-weight: bold;
    padding-right: 20px;
    flex: 1;
`
export const BodyText = styled.Text`
    color: #FFF;
    font-size: 16px;
    font-weight: 600;
    padding: 20px 10px;
`
export const RemoveButton = styled.TouchableOpacity`
    padding: 10px;
    background-color: red;
    border-radius: 10px;
`
export const RemoveButtonText = styled.Text`
    color: #FFF;
`