import SupplyRepository from '../repositories/SupplyRepository';

class Supply {
  constructor() { }

  public async getSupply(): Promise<string> {
    return await SupplyRepository.$getSupply();
  }
}

export default new Supply();
