import { useEffect, useState } from "react";

export default function Button() {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    useEffect(() => {
        //устанавливаем класс телу сайта
        document.body.className = isDarkTheme ? 'dark' : 'light';
    }, [isDarkTheme]);

    const toggleTheme = () => {
        //меняем значение на обратное
        setIsDarkTheme(prevTheme => !prevTheme);
    };

    return (
        <button onClick={toggleTheme}>
            Change theme to {isDarkTheme ? 'light' : 'dark'}
        </button>
    );
    //условный рендеринг
}