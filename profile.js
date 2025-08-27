const root = document.querySelector("#root");
const reactDomRoot = ReactDOM.createRoot(root);
function ProfileCard() {
  const [user, setUser] = React.useState(null);
  
  React.useEffect(
    () => {
        const fetchData = () => fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((res) => res.json())
        .then((res) => setUser(res))
        fetchData()
    },
    []
  );

  return (
    <div className="card">
      {!user ? (
        <span>Loading...</span>
      ) : (
        <>
          <div className="card-row">
            <div className="row-label">Name: </div>
            <span className="row-value">{user.name}</span>
          </div>
          <div className="card-row">
            <div className="row-label">Username: </div>
            <span className="row-value">{user.username}</span>
          </div>
          <div className="card-row">
            <div className="row-label">Email: </div>
            <span className="row-value">{user.email}</span>
          </div>
          <div className="card-row">
            <div className="row-label">Phone: </div>
            <span className="row-value">{user.phone}</span>
          </div>
          <div className="card-row">
            <div className="row-label">Wedsite: </div>
            <span className="row-value">{user.website}</span>
          </div>
          <div className="card-row">
            <div className="row-label">Adsress: </div>
            <span className="row-value">
              {user?.address?.street}, {user?.address?.city}
            </span>
          </div>
        </>
      )}
    </div>
  );
}

reactDomRoot.render(<ProfileCard />);
