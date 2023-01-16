import { Cell } from "./../Cell";
import { Colors } from "./../Color";
import { Figure, FigureName } from "./Figure";
import blackLogo from "../../assets/black-rook.png";
import whiteLogo from "../../assets/white-rook.png";
export class Rook extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell); // <=== метод супер вызов констуктора родительского класса
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureName.ROOK;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false;
    if (this.cell.isEmptyVertical(target)) return true;
    if (this.cell.isEmptyHorizontal(target)) return true;

    return false;
  }
}
