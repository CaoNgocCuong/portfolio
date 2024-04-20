// Libraries
import classNames from "classnames";

// Components
import ErrorBoundary from "@/components/error-boundary";

// Locale
import { translations } from "@/translations";
import { getTranslateMessage } from "@/translations/messages";

// Constants
import { FIND_ME, FIND_ME_KEY } from "./constants";

// Hooks
import { useMediaQuery } from "usehooks-ts";

const PATH = "src/components/common/footer/index.tsx";

export default function Footer() {
  const isDeskTop = useMediaQuery("(min-width: 768px)");

  const renderSocials = () => {
    const list = Object.values(FIND_ME);
    const socials = list.map((social, idx) => {
      const isLast = list.length - 1 === idx;
      const isAlignRight = isLast && isDeskTop;

      return (
        <a
          key={social.key}
          href={social.link}
          target="blank"
          className={classNames(
            "tw-flex tw-items-center tw-justify-center tw-w-[50px] tw-h-full tw-transition-colors tw-text-workspace-foreground hover:tw-text-workspace-foregroundHover",
            {
              "tw-border-r": !isLast,
              "tw-ml-auto tw-border-l tw-w-auto tw-px-6": isAlignRight,
            },
          )}
        >
          {isAlignRight && social.key === FIND_ME_KEY.GIT && (
            <span className="tw-mr-1">{social.alias}</span>
          )}
          {social.icon}
        </a>
      );
    });

    return <div className="tw-flex tw-items-center tw-w-full">{socials}</div>;
  };
  return (
    <ErrorBoundary path={PATH}>
      <div className="tw-flex tw-w-full tw-h-[50px] tw-border-t tw-border-border">
        <div className="tw-inline-block tw-w-[190px] tw-shrink-0 tw-leading-[50px] tw-text-workspace-foreground tw-cursor-pointer tw-border-r tw-indent-[18px] tw-transition-colors hover:tw-text-workspace-foregroundHover">
          {getTranslateMessage(translations.findMe.title)}
        </div>
        {renderSocials()}
      </div>
    </ErrorBoundary>
  );
}
