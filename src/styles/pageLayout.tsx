import { GlobalBackground } from "../components/globalBackground";

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden ">

      <GlobalBackground />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}