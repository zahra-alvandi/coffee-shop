// const toggleThemeBtn = document.querySelector("#toggle-theme");
// toggleThemeBtn.addEventListener("click", () => {
//     if (localStorage.theme === "dark") {
//         document.documentElement.classList.remove("dark");
//         localStorage.theme = "light";
//     } else {
//         document.documentElement.classList.add("dark");
//         localStorage.setItem("theme", "dark");
//     }
// })

    // Dark/Light/System Theme Toggle with localStorage (Optimized)
    (function () {
        const KEY = 'theme'; // 'light' | 'dark' | 'system'
        const root = document.documentElement;
        const mq = window.matchMedia('(prefers-color-scheme: dark)');
        let current = localStorage.getItem(KEY) || 'system';

        function setTheme(mode) {
            current = mode;
            localStorage.setItem(KEY, mode);
            root.setAttribute('data-theme', mode);
            updateLabel();
        }

        function effectiveTheme() {
            return current === 'system' ? (mq.matches ? 'dark' : 'light') : current;
        }

        function updateLabel() {
            const label = {
                light: 'روشن',
                dark: 'تاریک',
                system: 'سیستمی'
            };
            console.log(`انتخاب: ${label[current]} | اعمال‌شده: ${label[effectiveTheme()]}`);
        }

        // Listen to system changes when in system mode
        mq.addEventListener('change', () => current === 'system' && updateLabel());

        // Public API: call setTheme('light'|'dark'|'system') from your buttons
        window.setTheme = setTheme;

        // Init
        setTheme(current);
    })();
