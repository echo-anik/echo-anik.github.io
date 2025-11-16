'use client'

export default function CrystalBackground() {
  return (
    <>
      <style>{`
        @keyframes crystal-shimmer {
          0%, 100% { 
            background-position: 0% 0%, 0% 0%, 0% 0%, 50% 50%;
            background-size: 10px 10px, 10px 10px, 200% 200%, 200% 200%;
          }
          50% { 
            background-position: 1px 1px, -1px -1px, 100% 100%, 50% 50%;
            background-size: 12px 12px, 12px 12px, 200% 200%, 180% 180%;
          }
        }

        /* Dark theme background (ocean deep) */
        [data-theme="dark"] .theme-bg {
          background: radial-gradient(70% 55% at 50% 50%, #2a5d77 0%, #184058 18%, #0f2a43 34%, #0a1b30 50%, #071226 66%, #040d1c 80%, #020814 92%, #01040d 97%, #000309 100%), 
                      radial-gradient(160% 130% at 10% 10%, rgba(0,0,0,0) 38%, #000309 76%, #000208 100%), 
                      radial-gradient(160% 130% at 90% 90%, rgba(0,0,0,0) 38%, #000309 76%, #000208 100%);
        }

        /* Light theme background (crystal maze) */
        [data-theme="light"] .theme-bg {
          background: 
            repeating-linear-gradient(
              60deg,
              transparent 0px,
              transparent 1px,
              rgba(255, 255, 255, 0.05) 1px,
              rgba(255, 255, 255, 0.05) 2px
            ),
            repeating-linear-gradient(
              -60deg,
              transparent 0px,
              transparent 1px,
              rgba(255, 255, 255, 0.05) 1px,
              rgba(255, 255, 255, 0.05) 2px
            ),
            linear-gradient(
              60deg,
              rgba(43, 108, 176, 0.4) 0%,
              rgba(72, 126, 176, 0.4) 33%,
              rgba(95, 142, 176, 0.4) 66%,
              rgba(116, 157, 176, 0.4) 100%
            ),
            radial-gradient(
              circle at 50% 50%,
              rgba(255, 255, 255, 0.2) 0%,
              transparent 50%
            );
          background-blend-mode: overlay, overlay, normal, screen;
          animation: crystal-shimmer 15s ease-in-out infinite;
        }
      `}</style>
      
      <div className="fixed inset-0 w-full h-full -z-10 theme-bg transition-all duration-500" />
    </>
  )
}
