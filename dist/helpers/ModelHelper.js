"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Input_1 = __importDefault(require("../models/Input"));
const Textarea_1 = __importDefault(require("../models/Textarea"));
class ModelHelper {
    static getModelDefaultAttributes(model) {
        switch (model) {
            case 'input':
                return new Input_1.default().defaultProps;
            case 'textarea':
                return new Textarea_1.default().defaultProps;
            default:
                return {};
        }
    }
}
exports.default = ModelHelper;
//# sourceMappingURL=ModelHelper.js.map