export default function ThreeSlot({ children }) {
  return (
    <div className="my-10 sm:my-12 lg:my-14">
      <div className="relative overflow-hidden rounded-3xl border border-gray-200/70 bg-white/60 p-3 backdrop-blur">
        <div className="h-72 sm:h-80 lg:h-96 rounded-2xl bg-gray-50/60 flex items-center justify-center">
          {children || <span className="text-gray-400">3D placeholder</span>}
        </div>
      </div>
    </div>
  );
}
