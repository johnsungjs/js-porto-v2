export enum Direction {
  UP,
  DOWN,
  LEFT,
  RIGHT,
}

export function fadeIn(direction: Direction, delay: number) {
  return {
    hidden: {
      y:
        direction === Direction.UP
          ? 40
          : direction === Direction.DOWN
          ? -40
          : 0,
      x:
        direction === Direction.LEFT
          ? 40
          : direction === Direction.RIGHT
          ? -40
          : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.5,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
}

// export const gestureTap = {
//   whileHover: {{scale: 1.2}}
// }
