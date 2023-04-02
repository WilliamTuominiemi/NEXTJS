import styles from '../Posts.module.css'

async function getpost(postId: string) {
    const res = await fetch(`http://127.0.0.1:8090/api/collections/posts/records/${postId}`, {
        next: { revalidate: 10 },
    })
    const data = await res.json()
    return data
}

export default async function PostPage({ params }: any) {
    const post = await getpost(params.id)

    return (
        <div>
            <h1>notes/{post.id}</h1>
            <div className={styles.post}>
                <h3>{post.title}</h3>
                <h5>{post.content}</h5>
                <p>{post.created}</p>
            </div>
        </div>
    )
}
