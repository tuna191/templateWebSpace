import { FC } from "react";
import styles from "./Container.module.scss";

type ContainerObj = {
  className?: string;
};

const Container: FC<ContainerObj> = (props) => {
  const cssStyle = [styles["background-container"], props.className]; // tách mảng thành 2 chuỗi 
console.log(cssStyle.join(" "))
  return <div className={cssStyle.join(" ")}>{props.children}</div>;
};

export default Container;
