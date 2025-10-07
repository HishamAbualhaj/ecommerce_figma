
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const languages = [
  { code: "en", label: "English" },
  { code: "ar", label: "العربية" },
  { code: "de", label: "Deutsch" },
  { code: "fr", label: "Français" },
];

export default function LanguageSwitcher() {
  const [selected, setSelected] = useState(languages[0]);
  const [open, setOpen] = useState(false);

  return (
    <div className="relative text-light z-10">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2  bg-dark text-light text-md hover:opacity-90"
      >
        {selected.label}
        <ChevronDown
          size={16}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-32 bg-light text-dark rounded-md shadow-md py-2">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setSelected(lang);
                setOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 text-sm hover:bg-secondary ${
                selected.code === lang.code ? "font-bold" : ""
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
