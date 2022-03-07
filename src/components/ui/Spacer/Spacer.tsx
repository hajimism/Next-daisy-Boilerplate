import { VFC } from "react"

type Size = typeof TAILWIND_SIZES_MAP[number]["n"]
type Axis = "vertical" | "horizontal"

interface SpacerProps {
  size: Size
  axis?: Axis
}

export const Spacer: VFC<SpacerProps> = ({ size, axis }) => {
  const w = axis === "vertical" ? "px" : size
  const h = axis === "horizontal" ? "px" : size

  const value = TAILWIND_SIZES_MAP.find((item) => item.n === size)?.value
  const minW = axis === "horizontal" ? 1 : value
  const minH = axis === "horizontal" ? 1 : value

  return (
    <span
      className={`block w-${w} h-${h}`}
      style={{
        minWidth: minW,
        minHeight: minH,
      }}
    />
  )
}

/**
 * Taileind fixed size list
 * @see https://tailwindcss.com/docs/height#fixed-heights
 */

const TAILWIND_SIZES_MAP = [
  { n: 0, value: "0px" },
  { n: 1, value: "0.25rem" },
  { n: 2, value: "0.5rem" },
  { n: 3, value: "0.75rem" },
  { n: 4, value: "1rem" },
  { n: 5, value: "1.25rem" },
  { n: 6, value: "1.5rem" },
  { n: 7, value: "1.75rem" },
  { n: 8, value: "2rem" },
  { n: 9, value: "2.25rem" },
  { n: 10, value: "2.5rem" },
  { n: 11, value: "2.75rem" },
  { n: 12, value: "3rem" },
  { n: 14, value: "3.5rem" },
  { n: 16, value: "4rem" },
  { n: 20, value: "5rem" },
  { n: 24, value: "6rem" },
  { n: 28, value: "7rem" },
  { n: 32, value: "8rem" },
  { n: 36, value: "9rem" },
  { n: 40, value: "10rem" },
  { n: 44, value: "11rem" },
  { n: 48, value: "12rem" },
  { n: 52, value: "13rem" },
  { n: 56, value: "14rem" },
  { n: 60, value: "15rem" },
  { n: 64, value: "16rem" },
  { n: 72, value: "18rem" },
  { n: 80, value: "20rem" },
  { n: 96, value: "24rem" },
] as const
