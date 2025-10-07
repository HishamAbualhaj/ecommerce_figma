import type React from "react";
import LanguageSwitcher from "./ui/LanguageSwitcher";

interface AnnouncementBarProps {
  title: string;
  Button: React.ReactNode;
}
const AnnouncementBar = ({ title, Button }: AnnouncementBarProps) => {
  return (
    <div className="bg-dark py-3 text-white">
      <div className="max-container">
        <div className="flex max-md:flex-col max-md:items-center max-md:gap-5">
          <div className="flex flex-1 justify-center gap-3 max-md:flex-col max-md:items-center">
            <div className="text-center">{title}</div>
            <div className="text-cener"> {Button}</div>
          </div>
          <div className="md:ml-auto">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
