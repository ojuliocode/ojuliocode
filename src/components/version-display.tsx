import pkg from '../../package.json';

export function VersionDisplay() {
  const appVersion = pkg.version;

  return (
    <div
      className="fixed bottom-1 left-1 z-[9999] px-2 py-0.5 bg-gray-800 bg-opacity-30 text-white text-xs opacity-30 hover:opacity-70 transition-opacity rounded select-none"
      title={`Version ${appVersion}`}
      aria-label={`Application version ${appVersion}`} // For accessibility
    >
      v{appVersion}
    </div>
  );
}