const colors = ['#3fc4be', '#ffbc2a', '#2462d3', '#7dc02a',
  '#767175', '#af62d1', '#dc3a20', '#59dd93'];

export const generateRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};
