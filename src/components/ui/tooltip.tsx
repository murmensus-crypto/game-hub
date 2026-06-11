import * as React from "react";

export interface TooltipProps {
  content: React.ReactNode;
  disabled?: boolean;
  children: React.ReactNode;
}

export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  function Tooltip({ content, children, disabled = false }, ref) {
    if (disabled) return <>{children}</>;

    const title = typeof content === "string" ? content : undefined;
    return (
      <span title={title} ref={ref as any}>
        {children}
      </span>
    );
  }
);

