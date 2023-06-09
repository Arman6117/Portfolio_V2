export const Position = (element) => {
  let top = 0;
  let left = 0;
  let color = "";
  let scale = 1;
  switch (element) {
    case "React":
      top = 2;
      left = 14;
      color = "#0DB4FB";
      scale = 1;
      break;
    case "HTML":
      top = 4;
      left = 42;
      color = "#FF6C19";
      scale = 1;
      break;
    case "JS":
      top = 15;
      left = 6;
      color = "#F7DF1E";
      scale = 1;
      break;
    case "Node":
      top = 20;
      left = -3;
      color = "#83CD29";
      scale = 0.5;
      break;
    case "Ex":
      top = 29;
      left = -3;
      color = "black";
      scale = 0.5;
      break;
    case "Java":
      top = 27;
      left = 12;
      color = "#EA2D2E";
      scale = 1;
      break;
    case "Git":
      top = 20;
      left = 22;
      color = "#F34F29";
      scale = 1;
      break;
    case "CSS":
      top = 19;
      left = 35;
      color = "#1572B6";
      scale = 1;
      break;
    case "SASS":
      top = 10;
      left = 27;
      color = "#FF007A";
      scale = 1;
      break;
    case "NPM":
      top = 26;
      left = 32;
      color = "#C53735";
      scale = 1;
      break;
  }
  return { top, left, color,scale };
};
