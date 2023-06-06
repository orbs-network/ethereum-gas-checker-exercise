import React, { PropsWithChildren } from "react";

import "./Stack.scss";

const DEFAULT_GAP = 2;

interface OwnProps extends PropsWithChildren {
	as?: React.ElementType;
	className?: string;
	gap?: number;
}
type Props = React.HTMLAttributes<React.ElementType> & OwnProps;

export const Stack: React.FC<Props> = ({
	as: HtmlTag = "div",
	children,
	className = "",
	gap = DEFAULT_GAP,
	...props
}) => {
	return (
		<HtmlTag
			style={{ "--gap": gap }}
			className={["Stack", className].join(" ")}
			{...props}
		>
			{children}
		</HtmlTag>
	);
};
