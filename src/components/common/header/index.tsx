// Libraries
import { useState } from "react";
import classNames from "classnames";

// Hooks
import { useMediaQuery } from "usehooks-ts";

// Components
import { Footer } from "@/components";
import ErrorBoundary from "@/components/error-boundary";
import {
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { RiMenuLine, RiCloseLargeLine } from "@remixicon/react";

// Constants
import { NICK_NAME } from "@/constants";
import { NAVIGATION } from "./constants";

const PATH = "src/components/common/Header/index.tsx";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [snap, setSnap] = useState<number | string | null>("0.65");
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const renderNavigation = () => {
    const list = Object.entries(NAVIGATION);
    const contentNav = list.map(([name, info], idx) => {
      const { text } = info;
      const isLast = list.length - 1 === idx;

      return (
        <div
          key={name}
          className={classNames("menu__item", {
            "lg:tw-border-r": !isLast,
            "lg:tw-float-right": isLast,
            "lg:tw-border-l": isLast,
            "hover:tw-bg-white/5": !isDesktop,
          })}
        >
          {text}
        </div>
      );
    });
    return (
      <div
        className={classNames("tw-flex-1 lg:tw-inline-block", {
          "tw-hidden": isDesktop && !isOpen,
        })}
      >
        {contentNav}
      </div>
    );
  };

  return (
    <ErrorBoundary path={PATH}>
      <div className="tw-relative tw-flex tw-flex-col tw-w-full tw-border-b tw-border-border tw-h-14 lg:tw-flex-row lg:tw-static">
        <div className="heading__nickname">{NICK_NAME}</div>
        {isDesktop ? (
          renderNavigation()
        ) : (
          <Drawer
            open={isOpen}
            modal={false}
            snapPoints={[0.3, 0.65, 0.95, 1]}
            activeSnapPoint={snap}
            setActiveSnapPoint={setSnap}
            closeThreshold={0.3}
            onClose={() => {
              setIsOpen(false);
            }}
          >
            <DrawerTrigger asChild>
              <Button
                className="tw-absolute tw-right-0 tw-w-14 tw-h-full hover:tw-transition-all hover:tw-bg-workspace-background"
                variant="ghost"
                onClick={() => setIsOpen((prev) => !prev)}
              >
                {isOpen ? (
                  <RiCloseLargeLine
                    className="tw-text-workspace-foreground tw-transition-colors hover:tw-text-white"
                    size={16}
                  />
                ) : (
                  <RiMenuLine
                    className="tw-text-workspace-foreground tw-transition-colors hover:tw-text-white"
                    size={16}
                  />
                )}
              </Button>
            </DrawerTrigger>
            <DrawerOverlay className="tw-fixed tw-inset-0 tw-bg-workspace-background/70" />
            <DrawerContent className="tw-fixed tw-bg-workspace-background tw-flex tw-flex-col tw-border tw-border-border tw-border-b-0 tw-rounded-t-[10px] tw-bottom-0 tw-left-0 tw-right-0 tw-h-full tw-max-h-[97%] tw-mx-[15px]">
              {renderNavigation()}
              <Footer />
            </DrawerContent>
          </Drawer>
        )}
      </div>
    </ErrorBoundary>
  );
};
export default Header;
