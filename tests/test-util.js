import { prismaClient } from "../src/application/database.js";

export const createParameter = async () => {
  await prismaClient.parameter.createMany({
    data: [
      { id: 4098, name: "PHASE VOLTAGE L1-N" },
      { id: 4100, name: "PHASE VOLTAGE L2-N" },
      { id: 4102, name: "PHASE VOLTAGE L3-N" },
      { id: 4112, name: "LINE CURRENT L1" },
      { id: 4114, name: "LINE CURRENT L2" },
      { id: 4116, name: "LINE CURRENT L3" },
      { id: 4166, name: "FREQUENCY" },
    ],
  });
};

export const removeAllParameter = async () => {
  await prismaClient.parameter.deleteMany({});
};
