import React from "react";

import "./Button.scss";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<Props> = (props) => {
	return <button className="Button" {...props}></button>;
};
