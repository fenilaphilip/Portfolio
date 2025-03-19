import * as React from "react";

export const LanguageContext = React.createContext<object>({
  currentLanguage: "EN",
  toggleLanguage: () => {},
});

const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = React.useState<string>("EN");

  function toggleLanguage(lang: string) {
    console.log(`current language ${lang}`);
    setLanguage(lang);
  }

  const ContextValue = {
    currentLanguage: language,
    toggleLanguage,
  };
  return (
    <LanguageContext.Provider value={ContextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
