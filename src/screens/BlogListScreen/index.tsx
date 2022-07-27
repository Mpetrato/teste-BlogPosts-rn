import { useContext, useEffect, useState } from 'react'
import { NativeSyntheticEvent, Text, TextInputChangeEventData } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { PostCard } from '../../components/PostCard'
import * as C from './styles'
import { ListContext } from '../../context/ListContext'

export type TPostList = {
    userId: number;
    id: number;
    title: string;
    body: string
}

type TNewPostPage = {
    NewPost: any;
}

export const BlogListScreen = () => {
    
    const { state } = useContext(ListContext)
    const [newState, setNewState] = useState(state)
    
    useEffect(() => {
        setNewState(state)
    }, [state])

    
    const navigation = useNavigation<StackNavigationProp<TNewPostPage>>();
    let barHeight = getStatusBarHeight()


    const getBlogList = (item: TPostList) => {
        return <PostCard item={item}/>
    }

    const searchPost = (letra: string) => {
        setNewState(
            state.filter((post) => post.body.toLowerCase().includes(letra.toLowerCase()) || post.title.toLowerCase().includes(letra.toLocaleLowerCase()))
        )
    }

    return (
        <C.Container padding={barHeight}>
            <C.SearchInput 
                placeholder='Procurar um post'
                onChangeText={text => searchPost(text)}
            >
            </C.SearchInput>
            <C.PostNumber>Número de Posts: {newState.length}</C.PostNumber>
            <C.NewPostButton onPress={() => navigation.navigate('NewPost')}>
                <Text>Adicionar novo post</Text>
            </C.NewPostButton>
            <FlatList
                showsHorizontalScrollIndicator={false}
                keyExtractor={user => user.id.toString()}
                data={newState}
                renderItem={({ item }) => getBlogList(item)}
            >
            </FlatList>
        </C.Container>
    )
}