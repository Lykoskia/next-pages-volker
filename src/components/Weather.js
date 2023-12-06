import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from '@/utils/useTranslation';

export default function Weather() {
    const [weatherData, setWeatherData] = useState(null);

    const { locale } = useRouter();
    const translations = useTranslation(locale || 'en');

    const OWM_API_KEY = 'd65ba5b06901e0c1bc43bdd7ae0de785';
    const location = 'Crikvenica,Croatia';

    const lang = locale || 'en';
    const OWM_url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${OWM_API_KEY}&lang=${lang}&units=metric`;

    useEffect(() => {
        fetch(OWM_url)
            .then(response => response.json())
            .then(data => {
                if (data && data.main && data.weather) {
                    setWeatherData({
                        cityName: 'Crikvenica',
                        icon: data.weather[0].icon,
                        temperature: Math.round(data.main.temp),
                        description: data.weather[0].description
                    });
                }
            })
            .catch(error => console.log('Error: ', error));
    }, [lang]);

    return (
        <section className="text-center py-2 ring-1 bg-sky-200 shadow-md dark:shadow-sky-700 shadow-red-700 dark:bg-gray-900">
            {weatherData && (
                <div className="w-full">
                    <h2 className="text-2xl font-bold">{weatherData.cityName}</h2>
                    <p className="flex items-center justify-center text-xl">
                        <img src={`https://openweathermap.org/img/wn/${weatherData.icon}.png`} alt="Weather icon" className="w-9 h-9" />
                        {weatherData.description}
                    </p>
                    <p className="flex items-center justify-center text-xl">{translations.temperature}: <span className="font-bold">&nbsp;{weatherData.temperature}°C</span></p>
                </div>
            )}
        </section>
    );
};
