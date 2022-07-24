import { useContext } from 'react'
import { Text } from 'react-native'
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
    
    const navigation = useNavigation<StackNavigationProp<TNewPostPage>>();
    let barHeight = getStatusBarHeight()

    const { state } = useContext(ListContext)

    const getBlogList = (item: TPostList) => {
        return <PostCard item={item}/>
    }

    return (
        <C.Container padding={barHeight}>
            <C.SearchInput placeholder='Procurar um post'></C.SearchInput>
            <C.PostNumber>Número de Posts: {state.length}</C.PostNumber>
            <C.NewPostButton onPress={() => navigation.navigate('NewPost')}>
                <Text>Adicionar novo post</Text>
            </C.NewPostButton>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={state}
                renderItem={({ item }) => getBlogList(item)}
            >
            </FlatList>
        </C.Container>
    )
}