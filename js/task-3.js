function getElementWidth(content, padding, border) {
  const c = parseFloat(content);
  const p = parseFloat(padding);
  const b = parseFloat(border);
  const ElementWidth = c + p * 2 + b * 2;
  return ElementWidth;
}
