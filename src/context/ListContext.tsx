import axios from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";
import { TPostList } from "../screens/BlogListScreen";
import { TReducerAction } from "../types/TReducerAction";

type TListProvider = {
    children: ReactNode
}

type TListContext = {
    state: TPostList[];
    removePost: (id: number) => void;
    addPost: () => void;
}

export const ListContext = createContext<TListContext>({} as TListContext)

export const ListProvider = ({ children }: TListProvider) => {

    const [postList, setPostList] = useState<TPostList[]>([])

    useEffect(() => {
        axios.get<TPostList[]>('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            setPostList(response.data)
        })
    }, [])

    const removePost = (id: number) => {
        setPostList(postList.filter(post => post.id !== id))
    }

    const addPost = () => {
    }

    return (
        <ListContext.Provider value={{ state: postList, removePost, addPost}}>
            {children}
        </ListContext.Provider>
    )
}