// Components
import ErrorBoundary from "@/components/error-boundary";

interface FooterProps {}
const PATH = "src/components/common/footer/index.tsx";
export default function Footer(props: FooterProps) {
  return (
    <ErrorBoundary path={PATH}>
      <div className="tw-w-full tw-h-[50px] tw-border-t tw-border-border">
        Footer
      </div>
    </ErrorBoundary>
  );
}
