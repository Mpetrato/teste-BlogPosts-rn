import axios from 'axios';
import { useState } from 'react';
import { NativeSyntheticEvent, Text, TextInputChangeEventData, TouchableOpacity } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height'
import { useNavigation } from '@react-navigation/native';

import * as C from './styles'

export const NewPost = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const navigation = useNavigation();
    let barHeight = getStatusBarHeight();

    const CreateNewPost = async () => {
        let response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
            title,
            body,
            userId: 1
        })
        console.log(response.data)
        navigation.goBack();
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
            <TouchableOpacity onPress={CreateNewPost}>
                <Text>Console</Text>
            </TouchableOpacity>
        </C.Container>
    )
}