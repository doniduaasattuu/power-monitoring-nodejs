CREATE DATABASE power_monitoring;

DROP DATABASE power_monitoring;

USE power_monitoring;

SHOW TABLES;

INSERT INTO
    parameters (id, name, unit)
VALUES (
        4098,
        "PHASE VOLTAGE L1-N",
        "Volt"
    ),
    (
        4100,
        "PHASE VOLTAGE L2-N",
        "Volt"
    ),
    (
        4102,
        "PHASE VOLTAGE L3-N",
        "Volt"
    ),
    (4112, "LINE CURRENT L1", "mA"),
    (4114, "LINE CURRENT L2", "mA"),
    (4116, "LINE CURRENT L3", "mA"),
    (4166, "FREQUENCY", 'mHz');

SELECT * FROM parameters;

DESC parameters;