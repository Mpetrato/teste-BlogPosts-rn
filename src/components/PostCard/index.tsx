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
            <C.BodyText>{item.title}</C.BodyText>
            <C.RemoveButton>
                <C.RemoveButtonText onPress={() => removePost(item.id)}>
                    Remover
                </C.RemoveButtonText>
            </C.RemoveButton>
        </C.Container>
    )
}