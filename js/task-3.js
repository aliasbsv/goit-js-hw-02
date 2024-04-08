function getElementWidth(content, padding, border) { 
  cont = Number.parseFloat(content);
  pad = Number.parseFloat(padding);
  bord = Number.parseFloat(border);
  const totalWeight = cont + (pad * 2) + (bord * 2);
  return  totalWeight;
}
      console.log(getElementWidth("50px", "8px", "4px")); // 74
      console.log(getElementWidth("60px", "12px", "8.5px")); // 101
      console.log(getElementWidth("200px", "0px", "0px")); // 200