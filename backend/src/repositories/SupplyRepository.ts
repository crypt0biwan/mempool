import DB from '../database';
import logger from '../logger';

class SupplyRepository {
  /**
   * Return most recent block height
   */
  public async $getSupply(): Promise<number> {
    try {
      const [row] = await DB.query('SELECT SUM(reward) / 100000000 AS supply FROM blocks');
      return row[0]['supply'];
    } catch (e) {
      logger.err(`Cannot count supply. Reason: ` + (e instanceof Error ? e.message : e));
      throw e;
    }
  }
}

export default new SupplyRepository();
