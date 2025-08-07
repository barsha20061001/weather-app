export default function Weathercard({ weather }) {
  if (!weather) return null; // Safe check

  const { name, main, weather: weatherInfo } = weather;

  return (
    <div className="bg-blue-100 rounded-lg p-4 shadow mt-4 text-left">
      <h2 className="text-2xl font-semibold mb-2">{name}</h2>
      <p className="text-xl">{weatherInfo[0].main}</p>
      <p className="text-5xl font-bold">{main.temp}°C</p>
      <p className="text-sm mt-2">Feels like: {main.feels_like}°C</p>
      <p className="text-sm">Humidity: {main.humidity}%</p>
    </div>
  );
}























