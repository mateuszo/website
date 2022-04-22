import { useEffect, useState } from "react";
import { getCookie, setCookie } from "typescript-cookie";

export function CookieNotice() {
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    if (getCookie("consent")) {
      setConsent(true);
    }
  }, []);

  useEffect(() => {
    if (consent) {
      setCookie("consent", true);
    }
  });

  if (consent) {
    return <></>;
  }

  return (
    <div className="animate-appear fixed bottom-0 right-0">
      <div className="bg-white border-4 border-black m-2 p-2 flex items-center">
        <div>
          <h2 className="text-xl">This Website uses cookies</h2>
          <p>
            I use cookies and local storage to analyze traffic on this webisite
            (google analytics).
          </p>
        </div>
        <button
          className="group border-4 border-black m-2 p-2 hover:bg-black hover:text-white transition-colors duration-300"
          type="button"
          onClick={() => setConsent(true)}
        >
          <span className="group-hover:animate-glitch block">Agree</span>
        </button>
      </div>
    </div>
  );
}
