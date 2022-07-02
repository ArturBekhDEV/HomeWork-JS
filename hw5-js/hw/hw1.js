// 1. Создать объект Point, содержащий два с
// войства: "x" и "y" — координаты точки, и метод
//  GetQuadrant, вычисляющий, в каком квадранте в
//   декартовой системе координат находится данная точка.
//    Протестируйте данный объект, изменяя значения его
//     координат, и повторно вызавая метод GetQuadrant.

let point = {
  x: 0,
  y: 0,
};

function GetQuadrant(x, y) {
  if (x > 0 && y > 0) {
    console.log("first quadrant!");
  } else if (x > 0 && y < 0) {
    console.log("second quadrant!");
  } else if (x < 0 && y < 0) {
    console.log("trhid quadrant!");
  } else if (x === 0 && y === 0) {
    console.log("zero zero");
  }
}

GetQuadrant(point.x, point.y);
