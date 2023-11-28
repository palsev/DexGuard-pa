"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataType = exports.createMethod = exports.create = exports.UInt = exports.Tuple = exports.String = exports.StaticBytes = exports.Pointer = exports.Method = exports.Int = exports.DynamicBytes = exports.Bool = exports.Array = exports.Address = void 0;
var evm_data_type_factory_1 = require("./evm_data_type_factory");
Object.defineProperty(exports, "Address", { enumerable: true, get: function () { return evm_data_type_factory_1.Address; } });
Object.defineProperty(exports, "Array", { enumerable: true, get: function () { return evm_data_type_factory_1.Array; } });
Object.defineProperty(exports, "Bool", { enumerable: true, get: function () { return evm_data_type_factory_1.Bool; } });
Object.defineProperty(exports, "DynamicBytes", { enumerable: true, get: function () { return evm_data_type_factory_1.DynamicBytes; } });
Object.defineProperty(exports, "Int", { enumerable: true, get: function () { return evm_data_type_factory_1.Int; } });
Object.defineProperty(exports, "Method", { enumerable: true, get: function () { return evm_data_type_factory_1.Method; } });
Object.defineProperty(exports, "Pointer", { enumerable: true, get: function () { return evm_data_type_factory_1.Pointer; } });
Object.defineProperty(exports, "StaticBytes", { enumerable: true, get: function () { return evm_data_type_factory_1.StaticBytes; } });
Object.defineProperty(exports, "String", { enumerable: true, get: function () { return evm_data_type_factory_1.String; } });
Object.defineProperty(exports, "Tuple", { enumerable: true, get: function () { return evm_data_type_factory_1.Tuple; } });
Object.defineProperty(exports, "UInt", { enumerable: true, get: function () { return evm_data_type_factory_1.UInt; } });
Object.defineProperty(exports, "create", { enumerable: true, get: function () { return evm_data_type_factory_1.create; } });
Object.defineProperty(exports, "createMethod", { enumerable: true, get: function () { return evm_data_type_factory_1.createMethod; } });
var data_type_1 = require("./abstract_data_types/data_type");
Object.defineProperty(exports, "DataType", { enumerable: true, get: function () { return data_type_1.DataType; } });
//# sourceMappingURL=index.js.map