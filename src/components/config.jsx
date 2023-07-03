import useMouse from "@react-hook/mouse-position";

export const useVariants = (ref) => {
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  let mouseXPosition = 0;
  let mouseYPosition = 0;
  if (mouse.clientX !== null) {
    mouseXPosition = mouse.clientX;
  }

  if (mouse.clientY !== null) {
    mouseYPosition = mouse.clientY;
  }

  return {
    default: {
      opacity:0,
      height: 20,
      width: 20,
      x: mouseXPosition,
      y: mouseYPosition,
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    education: {
      opacity: 1,
      backgroundColor: "transparent",
      color: "#fff",
      height: 200,
      width: 200,
      x: mouseXPosition - 32,
      y: mouseYPosition - 32,
    },
    experience: {
      opacity: 1,
      backgroundColor: "transparent",
      color: "#fff",
      height: 200,
      width: 200,
      x: mouseXPosition - 48,
      y: mouseYPosition - 48,
    },
  };
};

export const spring = {
  type: "spring",
  stiffness: 500,
  damping: 28,
};