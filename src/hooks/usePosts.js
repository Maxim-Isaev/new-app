import { useMemo } from "react";

export const useSortedPosts = (posts, sort) => {
    //Оптимизированный алгоритм сортировки (с помощью кэша)
    const sortedPosts = useMemo(() => {
        console.log('ОТРАБОТАЛА ЭТА СРАНАЯ ФУНКЦИЯ')
        if(sort) {
            return [...posts].sort((a,b) => a[sort].localeCompare(b[sort]))
        }
        return posts;
    }, [sort, posts])

    return sortedPosts;
}

export const usePosts = (posts, sort, query) => {
    const sortedPosts = useSortedPosts(posts, sort);

    const sortedAndSearchPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
    
      }, [query, sortedPosts])
      
      return sortedAndSearchPosts;
}