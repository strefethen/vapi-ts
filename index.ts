import msRest = require("ms-rest-js");

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";

let host = "https://sc2-rdops-vm06-dhcp-195-173";

var username = 'administrator@vsphere.local',
    password = 'Admin!23',
    url = `${host}/rest/com/vmware/cis/session`;

// Setup Basic Auth request to the vSphere REST endpoint
let authRequest = new msRest.WebResource(`${host}/rest/com/vmware/cis/session`, 
	"POST",
	null,
	undefined,
	{  
		"Authorization": "Basic " + new Buffer(`${username}:${password}`).toString("base64")
	}
);

async function auth() {
  let value = await msRest.dispatchRequest(authRequest);
}

async function get(url: string) {
  return await msRest.dispatchRequest(new msRest.WebResource(url));
}

auth().then(() => {
	// Fetch a list of VMs
	get(`${host}/rest/vcenter/vm`).then((vms) => {
		console.log(vms.bodyAsText);
		// Fetch details for a single VM, if we recieved a list
		get(`${host}/rest/vcenter/vm/${vms.bodyAsJson.value[0].vm}`).then((vm) => {
			console.log(`\nDetails of VM: ${vms.bodyAsJson.value[0].vm}`);
			console.log(vm.bodyAsText);
		});
	}).catch((error) => {
		console.log(error);
	});
});
