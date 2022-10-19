export default function convertValute(firstValute, secondValute, count) {
  return (firstValute.Value * count) / secondValute.Value
}
