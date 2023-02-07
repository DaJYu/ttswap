import Web3 from 'web3'
import abi from '../../abis/erc20.json';


export async function getWalletUser() {
	const accounts = await ethereum.request({
		method: 'eth_requestAccounts'
	});
	console.log(accounts)
	const account = accounts[0];
	sessionStorage.setItem('userKey', account)
	// getETH()
}

export async function getETH() {
	// const web3 = new Web3(Web3.currentProvider)
	// console.log(web3.eth.accounts[0])
	// const fromAddress = web3.eth.accounts()
	// console.log(web3.eth.getBalance(fromAddress[0])) 
	// console.log(fromAddress)
	// web3.eth.getBalance(fromAddress[e], (err, res) => {
	// 	if (!err) {
	// 		alert("ETH余额==" + res / Math.pow(10, 18));
	// 		console.Log(res)
	// 	}
	// })
}
