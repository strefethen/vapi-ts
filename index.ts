import msRest = require("ms-rest-js");

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";

let host = "https://sc2-rdops-vm06-dhcp-195-173";

// Setup Basic Auth request to the vSphere REST endpoint
let req = new msRest.WebResource(`${host}/rest/com/vmware/cis/session`, 
	"POST",
	null,
	undefined,
	{  
		"Accept": "application/json",
		"Content-Type": "application/json",
		"Authorization": "Basic " + new Buffer("administrator@vsphere.local:Admin!23").toString("base64")
	}
);

async function auth() {
  let value = await msRest.dispatchRequest(req);
}

async function listVms() {
  let list: msRest.HttpOperationResponse = await msRest.dispatchRequest(new msRest.WebResource(`${host}/rest/vcenter/vm`));
	console.log(list.bodyAsJson);
}

auth().then(() => {
	listVms();
});

