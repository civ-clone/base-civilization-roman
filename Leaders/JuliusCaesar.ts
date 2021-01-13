import Leader from '@civ-clone/core-civilization/Leader';
import Civilization from '@civ-clone/core-civilization/Civilization';
import Roman from '../Roman';

export class JuliusCaesar extends Leader {
  static civilization(): typeof Civilization {
    return Roman;
  }

  name(): string {
    return 'Abraham Lincoln';
  }
}

export default JuliusCaesar;
