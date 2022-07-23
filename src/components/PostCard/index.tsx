import { Text } from 'react-native'
import { TPostList } from '../../screens/BlogListScreen'
import * as C from './styles'

type TPostCard = {
    item: TPostList
}

export const PostCard = ({ item }: TPostCard) => {
    return (
        <C.Container>
            <C.BodyText>{item.title}</C.BodyText>
            <C.RemoveButton>
                <C.RemoveButtonText>
                    Remover
                </C.RemoveButtonText>
            </C.RemoveButton>
        </C.Container>
    )
}