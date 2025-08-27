const root = document.querySelector("#root")
const reactDomRoot = ReactDOM.createRoot(root)
function Comment() {
    const [comments, setComments] = React.useState(null)
    React.useEffect(() => {
        const fetchComments = () => fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
                                .then(res => res.json())
                                .then(res => setComments(res.map((item) => ({
                                    ...item,
                                    name: item.name[0]?.toUpperCase() + item.name.slice(1),
                                    avt_src: `https://ui-avatars.com/api/?name=${encodeURIComponent(item.name)}&background=random`
                                }))))
        fetchComments()
    }, [])
    console.log(comments);
    
    return (
        <div className="comment-overlay">
            <div className="comment-content">
                <button className="close-btn">X</button>
                <h2 className="comment-title">Bình luận bài viết của Khánh</h2>
                <div className="comment-post">
                    <img src="https://avatarmoi.com/wp-content/uploads/2025/06/Anh-gai-xinh-mong-bu-sexy.webp"/>
                    <img src="https://vapa.vn/wp-content/uploads/2022/12/hinh-gai-xinh.jpg"/>
                    <img src="https://vnclass.edu.vn/wp-content/uploads/2025/01/anh-gai-xinh-sexy-24.jpg"/>


                    
                </div>
                <div className="comment-interaction-bar">
                    <span>123 likes</span>
                    <span>{comments?.length} comments</span>
                </div>
                {!comments ? <span>Loading...</span>: !comments.length ? <span>Chưa có bình luận nào</span> :
                    <div className="comments-list">
                    {comments.map(comment => (
                        <>
                            <div key={comment.id} className="comment-item">
                                <img className="comment-avt" src={comment.avt_src}/>
                                <div className="comment-box">
                                    <span className="comment-username">{comment.name}</span>
                                    <span className="comment-email">{comment.email}</span>
                                    <span className="comment-body">{comment.body}</span>
                                </div>
                            </div>
                            <div className="comment-info">
                                <span>11 giờ trước</span>
                                <span>Thích</span>
                                <span>Trả lời</span>
                            </div>
                        </>
                    ))}
                </div>
                }
            </div>
        </div>
    )
}
reactDomRoot.render(<Comment />)