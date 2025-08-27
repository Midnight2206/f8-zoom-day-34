const root = document.querySelector("#root");
const reactDomRoot = ReactDOM.createRoot(root);
const weatherDay = [
  {
    weather: "Nhiều mây",
    iconClass: "fa-solid fa-cloud",
    color: "#ccc",
    humidity: Math.floor(Math.random() * 50 + 50),
  },
  {
    weather: "Có mưa",
    iconClass: "fa-solid fa-cloud-rain",
    color: "#666",
    humidity: Math.floor(Math.random() * 40 + 60),
  },
  {
    weather: "Nắng",
    iconClass: "fa-solid fa-sun",
    color: "#FFEA00",
    humidity: Math.floor(Math.random() * 60),
  },
  {
    weather: "Mưa giông",
    iconClass: "fa-solid fa-cloud-bolt",
    color: "#333",
    humidity: Math.floor(Math.random() * 20 + 80),
  },
  {
    weather: "Trời nắng có lúc mưa",
    iconClass: "fa-solid fa-cloud-sun-rain",
    color: "#FFF176",
    humidity: Math.floor(Math.random() * 50 + 50),
  },
  {
    weather: "Mưa lớn",
    iconClass: "fa-solid fa-cloud-showers-heavy",
    color: "#222",
    humidity: Math.floor(Math.random() * 20 + 80),
  },
  {
    weather: "Ngày quang mây",
    iconClass: "fa-solid fa-cloud-sun",
    color: "#FFFF00",
    humidity: Math.floor(Math.random() * 70),
  },
];
const weatherNight = [
  {
    weather: "Nhiều mây",
    iconClass: "fa-solid fa-cloud",
    color: "#ccc",
    humidity: Math.floor(Math.random() * 30 + 70),
  },
  {
    weather: "Có mưa",
    iconClass: "fa-solid fa-cloud-rain",
    color: "#666",
    humidity: Math.floor(Math.random() * 30 + 70),
  },
  {
    weather: "Mưa giông",
    iconClass: "fa-solid fa-cloud-bolt",
    color: "#333",
    humidity: Math.floor(Math.random() * 10 + 90),
  },
  {
    weather: "Mưa lớn",
    iconClass: "fa-solid fa-cloud-showers-heavy",
    color: "#222",
    humidity: Math.floor(Math.random() * 10 + 90),
  },
  {
    weather: "Đêm quang mây",
    iconClass: "fa-solid fa-cloud-moon",
    color: "#ccc",
    humidity: Math.floor(Math.random() * 70),
  },
];
function Weather() {
  const [dropShow, setDropShow] = React.useState(false);
  const [city, setCity] = React.useState(null);
  const [timeKey, setTimeKey] = React.useState(Date.now());
  const now = new Date(timeKey);
  const hour = now.getHours();
  const hourRender = String(hour).padStart(2, "0");
  const min = String(now.getMinutes()).padStart(2, "0");
  const isDay = hour > 6 && hour < 18;
  const weatherList = isDay ? weatherDay : weatherNight;
  const randomWeather =
    weatherList[Math.floor(Math.random() * weatherList.length)];
  const weatherData = [
    {
      city: "Hà Nội",
      temp: Math.floor(Math.random() * 36) + 5,
      ...randomWeather,
      windy: Math.floor(Math.random() * 70 + 5),
      gustyWind: Math.floor(Math.random() * 70 + 15),
      id: "hanoi",
    },
    {
      city: "TP.HCM",
      temp: Math.floor(Math.random() * 36) + 5,
      ...randomWeather,
      windy: Math.floor(Math.random() * 70 + 5),
      gustyWind: Math.floor(Math.random() * 70 + 15),
      id: "hcm",
    },
    {
      city: "Đà Nẵng",
      temp: Math.floor(Math.random() * 36) + 5,
      ...randomWeather,
      windy: Math.floor(Math.random() * 70 + 5),
      gustyWind: Math.floor(Math.random() * 70 + 15),
      id: "danang",
    },
  ];

  return (
    <>
      <div className="weather-header">
        <h1>THỜI TIẾT HÔM NAY</h1>
        <div className="drop-down">
          <div
            className="drop-down-value"
            onClick={() => setDropShow((prev) => !prev)}
          >
            <span>{city ? city.city : "--  Chọn thành phố  --"}</span>
            <i className="fa-solid fa-chevron-down"></i>
          </div>
          <div className={`drop-down-menu ${dropShow ? "show" : ""}`}>
            {weatherData.map((data) => (
              <div
                key={data.id}
                className="drop-down-item"
                onClick={() => {
                  setCity(data);
                  setDropShow(false);
                }}
              >
                {data.city}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="weather-body">
        <div
          className="weather-card"
          style={{
            backgroundColor:
                !city ? "#fff": 
              city?.temp <= 8
                ? "#A8DADC"
                : city?.temp <= 16
                ? "#B7E4C7"
                : city?.temp <= 24
                ? "#FFF9A6"
                : city?.temp <= 32
                ? "#FFD6A5"
                : "#e61818ff",
          }}
        >
          {!city ? (
            <span className="info-error">Bạn chưa chọn thành phố</span>
          ) : (
            <>
              <div className="card-header">
                <span className="card-header-title">{city.city} bây giờ</span>
                <span className="">
                  {hourRender}:{min}
                </span>
              </div>
              <div className="card-body">
                <div className="card-body-left">
                  <span className="card-temp">{city.temp} °C</span>
                  <span
                    style={{ color: city.color }}
                    className="card-weather-icon"
                  >
                    <i className={city.iconClass}></i>
                  </span>
                  <span className="card-weather-status">{city.weather}</span>
                </div>
                <div className="card-body-right">
                  <span className="card-right-row">Gió: {city.windy}Km/h</span>
                  <span className="card-right-row">
                    Gió giật: {city.gustyWind}Km/h
                  </span>
                  <span className="card-right-row">
                    Độ ẩm: {city.humidity}%
                  </span>
                  <span className="card-right-row">
                    Chất lượng không khí: Tốt
                  </span>
                </div>
              </div>
              <div className="card-footer">
                <button
                  className="reset-btn"
                  onClick={() => {
                    setTimeKey(Date.now());
                    if (city) {
                      const now = new Date();
                      const hour = now.getHours();
                      const isDay = hour > 6 && hour < 18;
                      const weatherList = isDay ? weatherDay : weatherNight;
                      const randomWeather =
                        weatherList[
                          Math.floor(Math.random() * weatherList.length)
                        ];

                      setCity((prev) => ({
                        ...prev,
                        ...randomWeather,
                        temp: Math.floor(Math.random() * 36) + 5,
                        windy: Math.floor(Math.random() * 70 + 5),
                        gustyWind: Math.floor(Math.random() * 70 + 15),
                      }));
                    }
                  }}
                >
                  Reset
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
reactDomRoot.render(<Weather />);
