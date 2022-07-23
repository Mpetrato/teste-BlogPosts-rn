import axios from 'axios'
import { useEffect, useState } from 'react'
import { Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { PostCard } from '../../components/PostCard'
import * as C from './styles'

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

    const [postList, setPostList] = useState<TPostList[]>([])

    const navigation = useNavigation<StackNavigationProp<TNewPostPage>>();
    let barHeight = getStatusBarHeight()
    
    useEffect(() => {
        axios.get<TPostList[]>('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            setPostList(response.data)
        })
    }, [])

    const getBlogList = (item: TPostList) => {
        return <PostCard item={item}/>
    }

    return (
        <C.Container padding={barHeight}>
            <C.SearchInput placeholder='Procurar um post'></C.SearchInput>
            <C.PostNumber>Número de Posts: {postList.length}</C.PostNumber>
            <C.NewPostButton onPress={() => navigation.navigate('NewPost')}>
                <Text>Adicionar novo post</Text>
            </C.NewPostButton>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={postList}
                renderItem={({ item }) => getBlogList(item)}
            >
            </FlatList>
        </C.Container>
    )
}