import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguageContext } from "./providers";
import { ModeToggle } from "./components";
import { translations } from "./translations";
import { getTranslateMessage } from "@/translations/messages";

function App() {
  const { handleClickChangeLanguage } = useLanguageContext();

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>Open</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => handleClickChangeLanguage("en")}>
            English
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleClickChangeLanguage("vi")}>
            Vietnamese
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <h1 className="tw-text-3xl tw-font-bold tw-underline">
        {getTranslateMessage(translations.heading)}
      </h1>
      <ModeToggle />
    </div>
  );
}

export default App;
