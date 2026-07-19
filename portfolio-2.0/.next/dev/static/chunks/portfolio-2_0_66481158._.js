(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/portfolio-2.0/components/landing/lenis-provider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LenisProvider",
    ()=>LenisProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$2$2e$0$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$7_$40$babel$2b$core$40$7$2e$2_6b59fbbfbe552fc1d87376b47bf484b4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio-2.0/node_modules/.pnpm/next@16.1.7_@babel+core@7.2_6b59fbbfbe552fc1d87376b47bf484b4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$2$2e$0$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$7_$40$babel$2b$core$40$7$2e$2_6b59fbbfbe552fc1d87376b47bf484b4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio-2.0/node_modules/.pnpm/next@16.1.7_@babel+core@7.2_6b59fbbfbe552fc1d87376b47bf484b4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$2$2e$0$2f$node_modules$2f2e$pnpm$2f$lenis$40$1$2e$3$2e$23_react$40$19$2e$2$2e$6$2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio-2.0/node_modules/.pnpm/lenis@1.3.23_react@19.2.6/node_modules/lenis/dist/lenis.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function LenisProvider({ children }) {
    _s();
    const lenisRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$2$2e$0$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$7_$40$babel$2b$core$40$7$2e$2_6b59fbbfbe552fc1d87376b47bf484b4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$2$2e$0$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$7_$40$babel$2b$core$40$7$2e$2_6b59fbbfbe552fc1d87376b47bf484b4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LenisProvider.useEffect": ()=>{
            const lenis = new __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$2$2e$0$2f$node_modules$2f2e$pnpm$2f$lenis$40$1$2e$3$2e$23_react$40$19$2e$2$2e$6$2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
                duration: 1.4,
                easing: {
                    "LenisProvider.useEffect": (t)=>Math.min(1, 1.001 - Math.pow(2, -10 * t))
                }["LenisProvider.useEffect"],
                touchMultiplier: 1.5,
                infinite: false
            });
            lenisRef.current = lenis;
            function raf(time) {
                lenis.raf(time);
                requestAnimationFrame(raf);
            }
            requestAnimationFrame(raf);
            return ({
                "LenisProvider.useEffect": ()=>{
                    lenis.destroy();
                }
            })["LenisProvider.useEffect"];
        }
    }["LenisProvider.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$2$2e$0$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$7_$40$babel$2b$core$40$7$2e$2_6b59fbbfbe552fc1d87376b47bf484b4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$2$2e$0$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$7_$40$babel$2b$core$40$7$2e$2_6b59fbbfbe552fc1d87376b47bf484b4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
_s(LenisProvider, "EGg8JqRqiLdZLNuaMV97MRehwwE=");
_c = LenisProvider;
var _c;
__turbopack_context__.k.register(_c, "LenisProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/portfolio-2.0/hooks/use-bg-music.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useBgMusic",
    ()=>useBgMusic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$2$2e$0$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$7_$40$babel$2b$core$40$7$2e$2_6b59fbbfbe552fc1d87376b47bf484b4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio-2.0/node_modules/.pnpm/next@16.1.7_@babel+core@7.2_6b59fbbfbe552fc1d87376b47bf484b4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useBgMusic() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$2$2e$0$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$7_$40$babel$2b$core$40$7$2e$2_6b59fbbfbe552fc1d87376b47bf484b4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useBgMusic.useEffect": ()=>{
            // Create audio element
            const audio = new Audio("/bg-music.mp3");
            audio.loop = true;
            audio.volume = 0.3; // Set volume to 30%
            audio.autoplay = true;
            // Play audio immediately
            audio.play().catch({
                "useBgMusic.useEffect": (err)=>{
                    console.log("Autoplay prevented:", err);
                }
            }["useBgMusic.useEffect"]);
            // Cleanup
            return ({
                "useBgMusic.useEffect": ()=>{
                    audio.pause();
                    audio.currentTime = 0;
                }
            })["useBgMusic.useEffect"];
        }
    }["useBgMusic.useEffect"], []);
}
_s(useBgMusic, "OD7bBpZva5O2jO+Puf00hKivP7c=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/portfolio-2.0/components/bg-music-player.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BgMusicPlayer",
    ()=>BgMusicPlayer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$2$2e$0$2f$hooks$2f$use$2d$bg$2d$music$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio-2.0/hooks/use-bg-music.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function BgMusicPlayer() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$2$2e$0$2f$hooks$2f$use$2d$bg$2d$music$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBgMusic"])();
    return null;
}
_s(BgMusicPlayer, "0eOZO5GXV/o6StyUHCAA15bkRBE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$2$2e$0$2f$hooks$2f$use$2d$bg$2d$music$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBgMusic"]
    ];
});
_c = BgMusicPlayer;
var _c;
__turbopack_context__.k.register(_c, "BgMusicPlayer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/portfolio-2.0/components/landing/navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navbar",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$2$2e$0$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$7_$40$babel$2b$core$40$7$2e$2_6b59fbbfbe552fc1d87376b47bf484b4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio-2.0/node_modules/.pnpm/next@16.1.7_@babel+core@7.2_6b59fbbfbe552fc1d87376b47bf484b4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$2$2e$0$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$7_$40$babel$2b$core$40$7$2e$2_6b59fbbfbe552fc1d87376b47bf484b4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio-2.0/node_modules/.pnpm/next@16.1.7_@babel+core@7.2_6b59fbbfbe552fc1d87376b47bf484b4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$2$2e$0$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react_86809e77762345432b3ebc8777def9a2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio-2.0/node_modules/.pnpm/framer-motion@12.40.0_react_86809e77762345432b3ebc8777def9a2/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$2$2e$0$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react_86809e77762345432b3ebc8777def9a2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio-2.0/node_modules/.pnpm/framer-motion@12.40.0_react_86809e77762345432b3ebc8777def9a2/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$2$2e$0$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react_86809e77762345432b3ebc8777def9a2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio-2.0/node_modules/.pnpm/framer-motion@12.40.0_react_86809e77762345432b3ebc8777def9a2/node_modules/framer-motion/dist/es/utils/use-motion-value-event.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$2$2e$0$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$7_$40$babel$2b$core$40$7$2e$2_6b59fbbfbe552fc1d87376b47bf484b4$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio-2.0/node_modules/.pnpm/next@16.1.7_@babel+core@7.2_6b59fbbfbe552fc1d87376b47bf484b4/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$2$2e$0$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$7_$40$babel$2b$core$40$7$2e$2_6b59fbbfbe552fc1d87376b47bf484b4$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio-2.0/node_modules/.pnpm/next@16.1.7_@babel+core@7.2_6b59fbbfbe552fc1d87376b47bf484b4/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const navLinks = [
    {
        label: "About",
        href: "/about"
    },
    {
        label: "Projects",
        href: "/projects"
    },
    {
        label: "Experience",
        href: "/experience"
    },
    {
        label: "Contact",
        href: "/#contact"
    }
];
function Navbar() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$2$2e$0$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$7_$40$babel$2b$core$40$7$2e$2_6b59fbbfbe552fc1d87376b47bf484b4$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [hidden, setHidden] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$2$2e$0$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$7_$40$babel$2b$core$40$7$2e$2_6b59fbbfbe552fc1d87376b47bf484b4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$2$2e$0$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$7_$40$babel$2b$core$40$7$2e$2_6b59fbbfbe552fc1d87376b47bf484b4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { scrollY } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$2$2e$0$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react_86809e77762345432b3ebc8777def9a2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])();
    const lastY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$2$2e$0$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$7_$40$babel$2b$core$40$7$2e$2_6b59fbbfbe552fc1d87376b47bf484b4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$2$2e$0$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react_86809e77762345432b3ebc8777def9a2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValueEvent"])(scrollY, "change", {
        "Navbar.useMotionValueEvent": (latest)=>{
            // Hide on scroll down, show on scroll up
            if (latest > lastY.current && latest > 100) {
                setHidden(true);
            } else {
                setHidden(false);
            }
            lastY.current = latest;
            setScrolled(latest > 20);
        }
    }["Navbar.useMotionValueEvent"]);
    function isActive(href) {
        if (href === "/projects") return pathname === "/projects";
        if (href === "/experience") return pathname === "/experience";
        if (href === "/about") return pathname === "/about";
        return false;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$2$2e$0$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$7_$40$babel$2b$core$40$7$2e$2_6b59fbbfbe552fc1d87376b47bf484b4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$2$2e$0$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react_86809e77762345432b3ebc8777def9a2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].header, {
        initial: {
            y: -100,
            opacity: 0
        },
        animate: {
            y: hidden ? -100 : 0,
            opacity: hidden ? 0 : 1
        },
        transition: {
            duration: 0.4,
            ease: [
                0.22,
                1,
                0.36,
                1
            ]
        },
        className: "fixed top-0 left-0 right-0 z-[100]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$2$2e$0$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$7_$40$babel$2b$core$40$7$2e$2_6b59fbbfbe552fc1d87376b47bf484b4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "transition-all duration-500",
            style: {
                background: scrolled ? "rgba(5,5,5,0.8)" : "transparent",
                backdropFilter: scrolled ? "blur(20px) saturate(1.5)" : "none",
                borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "1px solid transparent"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$2$2e$0$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$7_$40$babel$2b$core$40$7$2e$2_6b59fbbfbe552fc1d87376b47bf484b4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$2$2e$0$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$7_$40$babel$2b$core$40$7$2e$2_6b59fbbfbe552fc1d87376b47bf484b4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$2$2e$0$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$7_$40$babel$2b$core$40$7$2e$2_6b59fbbfbe552fc1d87376b47bf484b4$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "flex items-center gap-3 group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$2$2e$0$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$7_$40$babel$2b$core$40$7$2e$2_6b59fbbfbe552fc1d87376b47bf484b4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold transition-all duration-300 group-hover:border-purple-400/40 group-hover:bg-purple-500/10",
                                style: {
                                    border: "1px solid rgba(139,92,246,0.25)",
                                    background: "rgba(139,92,246,0.06)",
                                    color: "rgba(139,92,246,0.8)"
                                },
                                children: "N"
                            }, void 0, false, {
                                fileName: "[project]/portfolio-2.0/components/landing/navbar.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$2$2e$0$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$7_$40$babel$2b$core$40$7$2e$2_6b59fbbfbe552fc1d87376b47bf484b4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[13px] font-semibold tracking-[0.12em] uppercase text-white/80",
                                children: "Chandanpreet Kaur"
                            }, void 0, false, {
                                fileName: "[project]/portfolio-2.0/components/landing/navbar.tsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/portfolio-2.0/components/landing/navbar.tsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$2$2e$0$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$7_$40$babel$2b$core$40$7$2e$2_6b59fbbfbe552fc1d87376b47bf484b4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex items-center gap-1",
                        children: navLinks.map((link)=>{
                            const active = isActive(link.href);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$2$2e$0$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$7_$40$babel$2b$core$40$7$2e$2_6b59fbbfbe552fc1d87376b47bf484b4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$2$2e$0$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$7_$40$babel$2b$core$40$7$2e$2_6b59fbbfbe552fc1d87376b47bf484b4$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: link.href,
                                className: "relative px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.15em] transition-colors duration-300",
                                style: {
                                    color: active ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.5)"
                                },
                                children: [
                                    link.label,
                                    active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$2$2e$0$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$7_$40$babel$2b$core$40$7$2e$2_6b59fbbfbe552fc1d87376b47bf484b4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$2$2e$0$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react_86809e77762345432b3ebc8777def9a2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        layoutId: "nav-indicator",
                                        className: "absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] w-[3px] rounded-full",
                                        style: {
                                            background: "rgba(139,92,246,0.8)"
                                        },
                                        transition: {
                                            type: "spring",
                                            stiffness: 400,
                                            damping: 30
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/portfolio-2.0/components/landing/navbar.tsx",
                                        lineNumber: 93,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, link.label, true, {
                                fileName: "[project]/portfolio-2.0/components/landing/navbar.tsx",
                                lineNumber: 82,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/portfolio-2.0/components/landing/navbar.tsx",
                        lineNumber: 78,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$2$2e$0$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$7_$40$babel$2b$core$40$7$2e$2_6b59fbbfbe552fc1d87376b47bf484b4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "hidden md:block text-[11px] font-medium tracking-[0.2em] uppercase",
                        style: {
                            color: "rgba(255,255,255,0.35)"
                        },
                        children: "Portfolio 2026"
                    }, void 0, false, {
                        fileName: "[project]/portfolio-2.0/components/landing/navbar.tsx",
                        lineNumber: 106,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$2$2e$0$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$7_$40$babel$2b$core$40$7$2e$2_6b59fbbfbe552fc1d87376b47bf484b4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "flex md:hidden h-8 w-8 items-center justify-center",
                        "aria-label": "Menu",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$2$2e$0$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$7_$40$babel$2b$core$40$7$2e$2_6b59fbbfbe552fc1d87376b47bf484b4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$2$2e$0$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$7_$40$babel$2b$core$40$7$2e$2_6b59fbbfbe552fc1d87376b47bf484b4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-[1.5px] w-5 rounded-full bg-white/60"
                                }, void 0, false, {
                                    fileName: "[project]/portfolio-2.0/components/landing/navbar.tsx",
                                    lineNumber: 119,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$2$2e$0$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$7_$40$babel$2b$core$40$7$2e$2_6b59fbbfbe552fc1d87376b47bf484b4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-[1.5px] w-3.5 rounded-full bg-white/40"
                                }, void 0, false, {
                                    fileName: "[project]/portfolio-2.0/components/landing/navbar.tsx",
                                    lineNumber: 120,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/portfolio-2.0/components/landing/navbar.tsx",
                            lineNumber: 118,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/portfolio-2.0/components/landing/navbar.tsx",
                        lineNumber: 114,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/portfolio-2.0/components/landing/navbar.tsx",
                lineNumber: 59,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/portfolio-2.0/components/landing/navbar.tsx",
            lineNumber: 47,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/portfolio-2.0/components/landing/navbar.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_s(Navbar, "FMsOynxiTUbr0kZEltGALs1uAxs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$2$2e$0$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$7_$40$babel$2b$core$40$7$2e$2_6b59fbbfbe552fc1d87376b47bf484b4$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$2$2e$0$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react_86809e77762345432b3ebc8777def9a2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2d$2$2e$0$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react_86809e77762345432b3ebc8777def9a2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValueEvent"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=portfolio-2_0_66481158._.js.map