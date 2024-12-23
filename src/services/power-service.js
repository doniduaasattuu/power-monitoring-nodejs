import Modbus from "jsmodbus";
import net from "net";
import { getPowerValidation } from "../validation/power-validation.js";
import { validate } from "../validation/validation.js";

const read = async (request) => {
  request = await validate(getPowerValidation, request);

  const host = request.host;
  const register = request.register;

  return await new Promise((resolve, reject) => {
    const socket = new net.Socket();
    const client = new Modbus.client.TCP(socket, 1);
    const options = {
      host: host,
      port: 502,
    };

    socket.on("connect", async () => {
      try {
        const response = await client.readHoldingRegisters(register, 2);
        const value = response.response.body.values[1];

        const data = {
          host: host,
          register: register,
          value: value,
        };

        resolve(data);
      } catch (err) {
        reject(err.message);
      } finally {
        socket.end();
      }
    });

    socket.connect(options);
  });
};

const get = async (request) => {
  request = await validate(getPowerValidation, request);

  const host = request.host;
  const register = request.register;

  return await new Promise((resolve, reject) => {
    const socket = new net.Socket();
    const client = new Modbus.client.TCP(socket, 1);
    const options = {
      host: host,
      port: 502,
    };

    socket.on("connect", async () => {
      try {
        const response = await client.readHoldingRegisters(register, 2);
        const value = response.response.body.values[1];

        resolve(value);
      } catch (err) {
        reject(err.message);
      } finally {
        socket.end();
      }
    });

    socket.connect(options);
  });
};

export default { read, get };
