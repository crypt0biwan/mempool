import SupplyRepository from '../repositories/SupplyRepository';

class Supply {
  constructor() { }

  public async getSupply(): Promise<number> {
    return await SupplyRepository.$getSupply();
  }
}

export default new Supply();
