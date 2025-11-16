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

        /* Mouse hover lighting effect for dark theme */
        [data-theme="dark"] .theme-bg::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle 400px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(42, 93, 119, 0.35) 0%, rgba(24, 64, 88, 0.2) 30%, transparent 60%);
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        [data-theme="dark"] .theme-bg:hover::after {
          opacity: 1;
        }

        /* Light theme background (crystal maze - bright and airy) */
        [data-theme="light"] .theme-bg {
          background: 
            repeating-linear-gradient(
              60deg,
              transparent 0px,
              transparent 1px,
              rgba(59, 143, 181, 0.08) 1px,
              rgba(59, 143, 181, 0.08) 2px
            ),
            repeating-linear-gradient(
              -60deg,
              transparent 0px,
              transparent 1px,
              rgba(59, 143, 181, 0.08) 1px,
              rgba(59, 143, 181, 0.08) 2px
            ),
            linear-gradient(
              135deg,
              #f0f9ff 0%,
              #e0f2fe 25%,
              #bae6fd 50%,
              #e0f2fe 75%,
              #f0f9ff 100%
            ),
            radial-gradient(
              circle at 30% 30%,
              rgba(125, 211, 252, 0.3) 0%,
              transparent 50%
            ),
            radial-gradient(
              circle at 70% 70%,
              rgba(186, 230, 253, 0.2) 0%,
              transparent 50%
            );
          background-blend-mode: overlay, overlay, normal, screen, screen;
          animation: crystal-shimmer 15s ease-in-out infinite;
        }
        /* Mouse hover lighting effect for light theme */
        [data-theme="light"] .theme-bg::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle 500px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(14, 165, 233, 0.15) 0%, rgba(125, 211, 252, 0.08) 40%, transparent 70%);
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        [data-theme="light"] .theme-bg:hover::after {
          opacity: 1;
        }
      `}</style>
      
      <div className="fixed inset-0 w-full h-full -z-10 theme-bg transition-all duration-500" />
    </>
  )
}
