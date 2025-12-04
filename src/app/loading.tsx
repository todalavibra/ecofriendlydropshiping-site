export default function Loading() {
    return (
        <div className="min-h-screen bg-stone-50 flex items-center justify-center">
            <div className="text-center">
                <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-emerald-200 border-t-emerald-700 mb-4"></div>
                <p className="text-stone-600 font-medium">Loading...</p>
            </div>
        </div>
    );
}
