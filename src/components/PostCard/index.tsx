import { useContext } from 'react'
import { ListContext } from '../../context/ListContext'
import { TPostList } from '../../screens/BlogListScreen'
import * as C from './styles'

type TPostCard = {
    item: TPostList
}

export const PostCard = ({ item }: TPostCard) => {

    const { removePost } = useContext(ListContext)

    return (
        <C.Container>
            <C.TitleText>{item.title}</C.TitleText>
            <C.BodyText>{item.body}</C.BodyText>
            <C.RemoveButton onPress={() => removePost(item.id)}>
                <C.RemoveButtonText>
                    Remover
                </C.RemoveButtonText>
            </C.RemoveButton>
        </C.Container>
    )
}