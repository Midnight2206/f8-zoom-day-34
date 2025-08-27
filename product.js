const root = document.querySelector("#root");
const reactDomRoot = ReactDOM.createRoot(root);
function Product() {
  const [products, setProducts] = React.useState(null);
  const [modalData, setModalData] = React.useState(null);
  React.useEffect(() => {
    const fetchData = () => {
      fetch("https://jsonplaceholder.typicode.com/posts?_limit=12")
        .then((res) => res.json())
        .then((res) =>
          setProducts(
            res.map((item) => ({
              ...item,
              title: item.title[0].toUpperCase() + item.title.slice(1),
              bodyCompact:
                item.body.length > 97 ? item.body.slice(97) + "..." : item.body,
            }))
          )
        );
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="products-list">
        {products ? (
          products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-row">
                <div className="row-label">ID: </div>
                <div className="row-content">{product.id}</div>
              </div>
              <div className="product-row">
                <div className="row-label">Title: </div>
                <div className="row-content">{product.title}</div>
              </div>
              <div className="product-row">
                <div className="row-label">Content: </div>
                <div>{product.bodyCompact}</div>
              </div>
              <button
                onClick={() => setModalData(product)}
                className="detail-btn"
              >
                Xem chi tiết
              </button>
            </div>
          ))
        ) : (
          <span>Loading...</span>
        )}
      </div>
      {modalData ? (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={() => setModalData(null)}>X</button>
            <h3 className="modal-title">Product detail</h3>
            <div className="modal-section">
              <span className="modal-label">ID:</span>
              <span> </span>
              <span className="modal-value">{modalData.id}</span>
            </div>
            <div className="modal-section">
              <span className="modal-label">Title:</span>
              <span> </span>
              <span className="modal-value">{modalData.title}</span>
            </div>
            <div className="modal-section">
              <span className="modal-label">Content:</span>
              <span> </span>
              <span className="modal-value">{modalData.body}</span>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
reactDomRoot.render(<Product />);
