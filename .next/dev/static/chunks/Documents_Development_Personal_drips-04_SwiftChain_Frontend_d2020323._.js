(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Development/Personal/drips-04/SwiftChain_Frontend/services/themeService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "themeService",
    ()=>themeService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Personal$2f$drips$2d$04$2f$SwiftChain_Frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/Development/Personal/drips-04/SwiftChain_Frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Personal$2f$drips$2d$04$2f$SwiftChain_Frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Development/Personal/drips-04/SwiftChain_Frontend/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const API_BASE_URL = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Personal$2f$drips$2d$04$2f$SwiftChain_Frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL ?? '';
const themeService = {
    async getThemePreference () {
        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Personal$2f$drips$2d$04$2f$SwiftChain_Frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`${API_BASE_URL}/api/user/preferences/theme`);
        return data;
    },
    async saveThemePreference (theme) {
        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Personal$2f$drips$2d$04$2f$SwiftChain_Frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`${API_BASE_URL}/api/user/preferences/theme`, {
            theme
        });
        return data;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Development/Personal/drips-04/SwiftChain_Frontend/hooks/useTheme.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTheme",
    ()=>useTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Personal$2f$drips$2d$04$2f$SwiftChain_Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Development/Personal/drips-04/SwiftChain_Frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Personal$2f$drips$2d$04$2f$SwiftChain_Frontend$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Development/Personal/drips-04/SwiftChain_Frontend/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Personal$2f$drips$2d$04$2f$SwiftChain_Frontend$2f$services$2f$themeService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Development/Personal/drips-04/SwiftChain_Frontend/services/themeService.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
function useTheme() {
    _s();
    const { theme, resolvedTheme, setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Personal$2f$drips$2d$04$2f$SwiftChain_Frontend$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Personal$2f$drips$2d$04$2f$SwiftChain_Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTheme.useEffect": ()=>{
            let isMounted = true;
            const loadThemePreference = {
                "useTheme.useEffect.loadThemePreference": async ()=>{
                    try {
                        const data = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Personal$2f$drips$2d$04$2f$SwiftChain_Frontend$2f$services$2f$themeService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themeService"].getThemePreference();
                        if (!isMounted) {
                            return;
                        }
                        setTheme(data.theme);
                    } catch  {
                    // Keep next-themes default behavior (system) on failures.
                    }
                }
            }["useTheme.useEffect.loadThemePreference"];
            void loadThemePreference();
            return ({
                "useTheme.useEffect": ()=>{
                    isMounted = false;
                }
            })["useTheme.useEffect"];
        }
    }["useTheme.useEffect"], [
        setTheme
    ]);
    const updateTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Personal$2f$drips$2d$04$2f$SwiftChain_Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTheme.useCallback[updateTheme]": async (nextTheme)=>{
            setTheme(nextTheme);
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Personal$2f$drips$2d$04$2f$SwiftChain_Frontend$2f$services$2f$themeService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themeService"].saveThemePreference(nextTheme);
            } catch  {
            // Persist failure should not block UI theme switch.
            }
        }
    }["useTheme.useCallback[updateTheme]"], [
        setTheme
    ]);
    const toggleTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Personal$2f$drips$2d$04$2f$SwiftChain_Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTheme.useCallback[toggleTheme]": async ()=>{
            const nextTheme = resolvedTheme === 'dark' ? 'light' : 'dark';
            await updateTheme(nextTheme);
        }
    }["useTheme.useCallback[toggleTheme]"], [
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
_s(useTheme, "bijdusTXgLEXE1KJoief067hpig=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Personal$2f$drips$2d$04$2f$SwiftChain_Frontend$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Development/Personal/drips-04/SwiftChain_Frontend/components/ui/ThemeToggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeToggle",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Personal$2f$drips$2d$04$2f$SwiftChain_Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Development/Personal/drips-04/SwiftChain_Frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Personal$2f$drips$2d$04$2f$SwiftChain_Frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/Documents/Development/Personal/drips-04/SwiftChain_Frontend/node_modules/lucide-react/dist/esm/icons/moon.mjs [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Personal$2f$drips$2d$04$2f$SwiftChain_Frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/Documents/Development/Personal/drips-04/SwiftChain_Frontend/node_modules/lucide-react/dist/esm/icons/sun.mjs [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Personal$2f$drips$2d$04$2f$SwiftChain_Frontend$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Development/Personal/drips-04/SwiftChain_Frontend/hooks/useTheme.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function ThemeToggle() {
    _s();
    const { resolvedTheme, toggleTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Personal$2f$drips$2d$04$2f$SwiftChain_Frontend$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const isDark = resolvedTheme === 'dark';
    const iconClassName = 'h-5 w-5';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Personal$2f$drips$2d$04$2f$SwiftChain_Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: ()=>void toggleTheme(),
        "aria-label": isDark ? 'Switch to light mode' : 'Switch to dark mode',
        className: "inline-flex items-center justify-center rounded-md border border-secondary/40 p-2 transition-colors hover:bg-secondary/20",
        children: isDark ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Personal$2f$drips$2d$04$2f$SwiftChain_Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Personal$2f$drips$2d$04$2f$SwiftChain_Frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
            className: iconClassName
        }, void 0, false, {
            fileName: "[project]/Documents/Development/Personal/drips-04/SwiftChain_Frontend/components/ui/ThemeToggle.tsx",
            lineNumber: 19,
            columnNumber: 17
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Personal$2f$drips$2d$04$2f$SwiftChain_Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Personal$2f$drips$2d$04$2f$SwiftChain_Frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
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
_s(ThemeToggle, "DuMb+L6SXlrJ3nXbvpSk2jeISAU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Personal$2f$drips$2d$04$2f$SwiftChain_Frontend$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = ThemeToggle;
var _c;
__turbopack_context__.k.register(_c, "ThemeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_Development_Personal_drips-04_SwiftChain_Frontend_d2020323._.js.map