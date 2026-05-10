import { getOfficialProcedures } from "../services/officialProcedures";

export function useOfficialProcedures() {
  return {
    procedures: getOfficialProcedures(),
  };
}
