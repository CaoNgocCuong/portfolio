import { Button } from "@/components/ui/button";
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
      <br />
      <div style={{ display: "flex", gap: 4 }}>
        <Button>start-game</Button>
        <Button variant="secondary">Button</Button>
        <Button variant="ghost">Button</Button>
        <Button variant="outline">Button</Button>
      </div>
      <h1 className="tw-text-3xl tw-font-bold tw-underline">
        {getTranslateMessage(translations.heading)}
      </h1>
      <ModeToggle />
    </div>
  );
}

export default App;
