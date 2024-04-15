import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguageContext } from "./providers";

function App() {
  const { t, handleClickChangeLanguage } = useLanguageContext();

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

      <h1 className="tw-text-3xl tw-font-bold tw-underline">{t("heading")}</h1>
    </div>
  );
}

export default App;
