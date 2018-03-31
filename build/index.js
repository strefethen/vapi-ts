"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const msRest = require("ms-rest-js");
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";
let host = "https://sc2-rdops-vm06-dhcp-195-173";
let req = new msRest.WebResource(`${host}/rest/com/vmware/cis/session`, "POST", null, undefined, {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Authorization": "Basic " + new Buffer("administrator@vsphere.local:Admin!23").toString("base64")
});
function auth() {
    return __awaiter(this, void 0, void 0, function* () {
        let value = yield msRest.dispatchRequest(req);
    });
}
function listVms() {
    return __awaiter(this, void 0, void 0, function* () {
        let list = yield msRest.dispatchRequest(new msRest.WebResource(`${host}/vcenter/vm`));
        console.log(list);
    });
}
auth();
listVms();
//# sourceMappingURL=index.js.map