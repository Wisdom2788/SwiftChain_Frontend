module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/Documents/Development/Personal/drips-04/SwiftChain_Frontend/services/themeService.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "themeService",
    ()=>themeService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Personal$2f$drips$2d$04$2f$SwiftChain_Frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Development/Personal/drips-04/SwiftChain_Frontend/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
;
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? '';
const themeService = {
    async getThemePreference () {
        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Personal$2f$drips$2d$04$2f$SwiftChain_Frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`${API_BASE_URL}/api/user/preferences/theme`);
        return data;
    },
    async saveThemePreference (theme) {
        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Personal$2f$drips$2d$04$2f$SwiftChain_Frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post(`${API_BASE_URL}/api/user/preferences/theme`, {
            theme
        });
        return data;
    }
};
}),
"[project]/Documents/Development/Personal/drips-04/SwiftChain_Frontend/hooks/useTheme.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTheme",
    ()=>useTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Personal$2f$drips$2d$04$2f$SwiftChain_Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Development/Personal/drips-04/SwiftChain_Frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Personal$2f$drips$2d$04$2f$SwiftChain_Frontend$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Development/Personal/drips-04/SwiftChain_Frontend/node_modules/next-themes/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Personal$2f$drips$2d$04$2f$SwiftChain_Frontend$2f$services$2f$themeService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Development/Personal/drips-04/SwiftChain_Frontend/services/themeService.ts [app-ssr] (ecmascript)");
;
;
;
function useTheme() {
    const { theme, resolvedTheme, setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Personal$2f$drips$2d$04$2f$SwiftChain_Frontend$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Personal$2f$drips$2d$04$2f$SwiftChain_Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let isMounted = true;
        const loadThemePreference = async ()=>{
            try {
                const data = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Personal$2f$drips$2d$04$2f$SwiftChain_Frontend$2f$services$2f$themeService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["themeService"].getThemePreference();
                if (!isMounted) {
                    return;
                }
                setTheme(data.theme);
            } catch  {
            // Keep next-themes default behavior (system) on failures.
            }
        };
        void loadThemePreference();
        return ()=>{
            isMounted = false;
        };
    }, [
        setTheme
    ]);
    const updateTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Personal$2f$drips$2d$04$2f$SwiftChain_Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (nextTheme)=>{
        setTheme(nextTheme);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Personal$2f$drips$2d$04$2f$SwiftChain_Frontend$2f$services$2f$themeService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["themeService"].saveThemePreference(nextTheme);
        } catch  {
        // Persist failure should not block UI theme switch.
        }
    }, [
        setTheme
    ]);
    const toggleTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Personal$2f$drips$2d$04$2f$SwiftChain_Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        const nextTheme = resolvedTheme === 'dark' ? 'light' : 'dark';
        await updateTheme(nextTheme);
    }, [
        resolvedTheme,
        updateTheme
    ]);
    return {
        theme,
        resolvedTheme,
        setTheme: updateTheme,
        toggleTheme
    };
}
}),
"[project]/Documents/Development/Personal/drips-04/SwiftChain_Frontend/components/ui/ThemeToggle.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeToggle",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Personal$2f$drips$2d$04$2f$SwiftChain_Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Development/Personal/drips-04/SwiftChain_Frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Personal$2f$drips$2d$04$2f$SwiftChain_Frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/Documents/Development/Personal/drips-04/SwiftChain_Frontend/node_modules/lucide-react/dist/esm/icons/moon.mjs [app-ssr] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Personal$2f$drips$2d$04$2f$SwiftChain_Frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/Documents/Development/Personal/drips-04/SwiftChain_Frontend/node_modules/lucide-react/dist/esm/icons/sun.mjs [app-ssr] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Personal$2f$drips$2d$04$2f$SwiftChain_Frontend$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Development/Personal/drips-04/SwiftChain_Frontend/hooks/useTheme.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function ThemeToggle() {
    const { resolvedTheme, toggleTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Personal$2f$drips$2d$04$2f$SwiftChain_Frontend$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const isDark = resolvedTheme === 'dark';
    const iconClassName = 'h-5 w-5';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Personal$2f$drips$2d$04$2f$SwiftChain_Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: ()=>void toggleTheme(),
        "aria-label": isDark ? 'Switch to light mode' : 'Switch to dark mode',
        className: "inline-flex items-center justify-center rounded-md border border-secondary/40 p-2 transition-colors hover:bg-secondary/20",
        children: isDark ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Personal$2f$drips$2d$04$2f$SwiftChain_Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Personal$2f$drips$2d$04$2f$SwiftChain_Frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
            className: iconClassName
        }, void 0, false, {
            fileName: "[project]/Documents/Development/Personal/drips-04/SwiftChain_Frontend/components/ui/ThemeToggle.tsx",
            lineNumber: 19,
            columnNumber: 17
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Personal$2f$drips$2d$04$2f$SwiftChain_Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Personal$2f$drips$2d$04$2f$SwiftChain_Frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
            className: iconClassName
        }, void 0, false, {
            fileName: "[project]/Documents/Development/Personal/drips-04/SwiftChain_Frontend/components/ui/ThemeToggle.tsx",
            lineNumber: 19,
            columnNumber: 53
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Development/Personal/drips-04/SwiftChain_Frontend/components/ui/ThemeToggle.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__534d28ed._.js.map