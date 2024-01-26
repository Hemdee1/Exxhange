export default function handleWindowSize() {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  return { Width: `${screenWidth}px`, Height: `${screenHeight}px` };
}

window.addEventListener("resize", handleWindowSize);
