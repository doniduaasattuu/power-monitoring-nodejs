import powerService from "../services/power-service.js";
import { prismaClient } from "../application/database.js";

const read = async (req, res, next) => {
  try {
    const request = {
      host: "10.55.11.62",
      register: 4098,
    };

    const result = await powerService.read(request);

    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const dashboard = async (req, res, next) => {
  try {
    const parameters = await prismaClient.parameter.findMany({});

    const data = {
      host: "10.55.11.62",
    };

    for (let i = 0; i < parameters.length; i++) {
      const request = {
        host: "10.55.11.62",
        register: parameters[i].id,
      };

      const value = await powerService.get(request);
      data[parameters[i].name] =
        (value == 65535 ? 0 : value) + " " + parameters[i].unit;
    }

    res.status(200).json({
      data: data,
    });
  } catch (e) {
    next(e);
  }
};

export default { read, dashboard };
