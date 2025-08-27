const root = document.querySelector("#root")
const reactDomRoot = ReactDOM.createRoot(root)

function Counter() {
    const [count, setCount] = React.useState(0)
    return (
        <>
            <div className="counter">
                <h2 className={count ? (count > 0 ? "positive" : "negative") : "zero"}>
                    {count}
                </h2>
            </div>
            <div className="controls">
                <button className="btn" id="increase" onClick={() => setCount(count + 1)}>Increase</button>
                <button className="btn" id="decrease" onClick={() => setCount(count -1)}>Decrease</button>
                <button className="btn" id="reset" onClick={() => setCount(0)}>Resset</button>
            </div>
            <div className="info">{count ? (count > 0 ? "Dương" : "Âm") : "Bằng không"}</div>
        </>
    )
}
reactDomRoot.render(<Counter />)