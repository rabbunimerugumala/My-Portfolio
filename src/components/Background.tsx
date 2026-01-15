
const Background = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Floating Particles - Strict HabitPulse Theme (Blue/Purple only) */}
            <div
                className="absolute w-2.5 h-2.5 bg-blue-600/60 rounded-full animate-float-1 shadow-lg shadow-blue-600/40"
                style={{ top: "20%", left: "10%" }}
            ></div>
            <div
                className="absolute w-3.5 h-3.5 bg-violet-600/50 rounded-full animate-float-2 shadow-lg shadow-violet-600/40"
                style={{ top: "60%", left: "15%" }}
            ></div>
            <div
                className="absolute w-2 h-2 bg-indigo-500/60 rounded-full animate-float-3 shadow-lg shadow-indigo-500/40"
                style={{ top: "40%", left: "85%" }}
            ></div>
            <div
                className="absolute w-3 h-3 bg-blue-500/50 rounded-full animate-float-4 shadow-lg shadow-blue-500/30"
                style={{ top: "70%", left: "80%" }}
            ></div>
            <div
                className="absolute w-2.5 h-2.5 bg-violet-500/60 rounded-full animate-float-5 shadow-lg shadow-violet-500/40"
                style={{ top: "30%", left: "70%" }}
            ></div>
            <div
                className="absolute w-4 h-4 bg-indigo-600/40 rounded-full animate-float-6 shadow-lg shadow-indigo-600/30"
                style={{ top: "80%", left: "25%" }}
            ></div>

            {/* Geometric Shapes - Subtle & Dark */}
            <div
                className="absolute w-10 h-10 border-2 border-blue-500/20 rotate-45 animate-rotate-slow"
                style={{ top: "15%", right: "20%" }}
            ></div>
            <div
                className="absolute w-8 h-8 border-2 border-violet-500/20 animate-rotate-reverse"
                style={{ top: "75%", right: "15%" }}
            ></div>
            <div
                className="absolute w-12 h-12 border-2 border-indigo-500/10 rounded-full animate-pulse"
                style={{ top: "25%", left: "5%" }}
            ></div>

            {/* Gradient Orbs - Deep & Atmospheric */}
            <div
                className="absolute w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] animate-float-slow"
                style={{ top: "5%", right: "10%" }}
            ></div>
            <div
                className="absolute w-64 h-64 bg-violet-600/10 rounded-full blur-[80px] animate-float-slow-reverse"
                style={{ bottom: "15%", left: "5%" }}
            ></div>
        </div>
    );
};

export default Background;
