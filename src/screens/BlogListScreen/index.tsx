import axios from 'axios'
import { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import * as C from './styles'

type TPostList = {
    userId: number;
    id: number;
    title: string;
    body: string
}

export const BlogListScreen = () => {

    const [postList, setPostList] = useState<TPostList[]>([{
        userId: 5,
        id: 5,
        title: 'Olá mundo',
        body: 'tesntandodoasodsa'
    }])
    
    useEffect(() => {
       axios.get<TPostList[]>('https://jsonplaceholder.typicode.com/posts')
       .then((response) => {
            setPostList(response.data)
       })
    }, [])

    const getBlogList = (item: TPostList) => {
        return <Text>{item.title}</Text>
    }

    return (
        <View>
            <Text>Blog List</Text>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={postList}
                renderItem={({ item }) => getBlogList(item)}
            >
            </FlatList>
        </View>
    )
}