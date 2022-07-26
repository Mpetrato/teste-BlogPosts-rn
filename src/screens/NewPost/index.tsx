import axios from 'axios';
import { useContext, useState } from 'react';
import { NativeSyntheticEvent, Text, TextInputChangeEventData, TouchableOpacity } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height'
import { useNavigation } from '@react-navigation/native';

import * as C from './styles'
import { ListContext } from '../../context/ListContext';

export const NewPost = () => {

    const {addPost} = useContext(ListContext)

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const navigation = useNavigation();
    let barHeight = getStatusBarHeight();

    const CreateNewPost = async () => {
        if(title !== '' && body !== ''){
            const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
                title,
                body,
                userId: Math.random() * 1000
            })
            addPost(response.data)
            navigation.goBack();
        }else {
            alert('Preencha os campos!')
        }
    }

    return (
        <C.Container padding={barHeight}>
            <C.NewPostText>Cadastrar novo Post</C.NewPostText>
            <C.NewTextInput 
                placeholder='Titulo' 
                value={title} 
                onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => setTitle(e.nativeEvent.text)}
            />
            <C.NewTextInput 
                placeholder='Post'
                value={body}
                onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => setBody(e.nativeEvent.text)}
            />
            <C.RegisterButton onPress={CreateNewPost}>
                <C.RegisterButtonText>Cadastrar Post</C.RegisterButtonText>
            </C.RegisterButton>
        </C.Container>
    )
}