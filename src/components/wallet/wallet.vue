<!-- 钱包 -->
<template>
	<div>
		<!-- 连接钱包 -->
		<el-dialog title="连接钱包" :visible.sync="walletVis" width="400px">
			<div class="cot-grid">
				<div class="wallet-grid">
					<a v-if="MetaMask==false" class="flex-between wallet-cont wallet-xzys" target="_blank"
						rel="noopener noreferrer" href="https://metamask.io/">
						<div class="wallet-font">安装 MetaMask</div>
						<div class="wallet-img"><img src="../../assets/img/metamask.png" alt="Icon"></div>
					</a>
					<div v-else class="flex-between wallet-cont wallet-xzys pointer" @click="ljqbhs">
						<div class="wallet-font">MetaMask</div>
						<div class="wallet-img"><img src="../../assets/img/metamask.png" alt="Icon"></div>
					</div>
				</div>
				<div class="wallet-cont wallet-fwtk">
					连接钱包即表示您同意 ttswap Labs 的
					<el-link href="../tk" target="_blank" type="primary">服务条款</el-link>
					并确认您已阅读并理解 ttswap
					<el-link href="../sm" target="_blank" type="primary">协议免责声明</el-link>。
				</div>
			</div>
		</el-dialog>

		<!-- 等待连接 -->
		<el-dialog :visible.sync="walletWait" width="400px">
			<div class="cot-grid">
				<div class="wallet-grid" style="text-align: center;">
					<div v-loading="true" style="width: 100%;height: 60px;"></div>
					<div class="cion-title">等待连接</div>
					<div>在您的钱包中确认此连接</div>
				</div>
				<div class="wallet-cont wallet-fwtk">
					连接钱包即表示您同意 ttswap Labs 的
					<el-link href="../tk" target="_blank" type="primary">服务条款</el-link>
					并确认您已阅读并理解 ttswap
					<el-link href="../sm" target="_blank" type="primary">协议免责声明</el-link>。
				</div>
			</div>
		</el-dialog>

		<!-- 连接错误 -->
		<el-dialog :visible.sync="walletError" width="400px">
			<div class="cot-grid">
				<div class="wallet-grid" style="text-align: center;">
					<div class="el-icon-circle-close" style="font-size: 80px;color: #df2020;"></div>
					<div class="cion-title">连接错误</div>
					<div>连接尝试失败。请单击重试并按照步骤在您的钱包中连接。</div>
				</div>
				<el-button class="cion-title wallet-dklj " style="font-size: 16px;" @click="ljqbhs">再试一次</el-button>
				<el-button class="wallet-dklj" @click="dkqblj">返回钱包选择</el-button>
			</div>
		</el-dialog>
		<!--账户  -->

		<el-dialog title="账户" :visible.sync="walletUser" width="400px">
			<div class="cot-grid user-cot">
				<div class="wallet-grid">
					<div class="flex-between">
						<div style="line-height: 31px;">已与 MetaMask 连接</div>
						<div class="wallet-img">
							<el-button class="wallet-dklj" @click="dkqblj">断开</el-button>
						</div>
					</div>
				</div>
				<div class="flex">
					<div class=" " style="margin-right: 10px;">
						<span>
							<div
								style="border-radius: 50px; overflow: hidden; padding: 0px; margin: 0px; width: 16px; height: 16px; display: inline-block; background: rgb(24, 129, 242);">
								<svg x="0" y="0" width="16" height="16">
									<rect x="0" y="0" width="16" height="16"
										transform="translate(2.8411354470289627 0.5408008344748232) rotate(26.6 8 8)"
										fill="#FB1845"></rect>
									<rect x="0" y="0" width="16" height="16"
										transform="translate(-10.021014304025503 -1.2304474634588611) rotate(202.8 8 8)"
										fill="#03465E"></rect>
									<rect x="0" y="0" width="16" height="16"
										transform="translate(-11.54734162712476 9.595893428404954) rotate(176.5 8 8)"
										fill="#F95C01"></rect>
								</svg>
							</div>
						</span>
					</div>
					<p>{{slid}}</p>
				</div>
				<div>
					<p style="font-size: 20px;">0.02 görETH</p>
					<p style="padding-top: 10px; color: #999;">$0.00 USD</p>
				</div>
				<div class=" ">
					<el-button icon="el-icon-document-copy" type="text" style="border: 0; padding-right:20px;"
						@click="fzzh(showAccount)">复制地址</el-button>
					<el-link icon="el-icon-top-right" :href="ethAdss" target="_blank" type="primary">在以太坊资源浏览器上查看
					</el-link>
				</div>
			</div>
		</el-dialog>
	</div>
</template>

<script>
	import Web3 from './wallets.js'
	// import { Pool } from '@uniswap/v3-sdk'
	export default {
		name: "wallet",
		props: {
			kg: Boolean
		},
		data() {
			return {
				walletVis: false,
				walletUser: false,
				walletWait: false,
				walletError: false,
				showAccount: '',
				ethAdss: 'https://ropsten.etherscan.io/address/',
				MetaMask: false,
				slid: null,

			}
		},
		mounted() {
			if (typeof window.ethereum !== 'undefined') {
				this.MetaMask = true
			} else {
				this.MetaMask = false
			}
			this.showAccount = sessionStorage.getItem('userKey')
			this.slqmid()
		},
		watch: {
			// kg(a,b){
			// 		console.log(a+","+b)
			// // 		this.kg=b
			// // this.walletVis=a
			// }
		},
		methods: {
			slqmid() {
				if (sessionStorage.getItem('userKey') != null) {
					this.slid = sessionStorage.getItem('userKey').substr(0, 4) + "..." + sessionStorage.getItem('userKey')
						.substr((sessionStorage.getItem('userKey').length - 4), 4)
				}
			},
			initialWindow() {
				this.walletVis = false
				this.walletUser = false
				this.walletWait = false
				this.walletError = false
			},
			open() {
				// console.log(0)
				this.walletVis = true
			},
			async ljqbhs() {
				// this.walletVis = false
				this.initialWindow()
				this.walletWait = true
				try {
					const accounts = await ethereum.request({
						method: 'eth_requestAccounts'
					});
					const account = accounts[0];
					sessionStorage.setItem('userKey', account)
					this.showAccount = account;
					this.ethAdss = this.ethAdss + account;
					this.slqmid()
					this.initialWindow()
					this.$parent.sxsjjm()
					// console.log(accounts)
				} catch (e) {
					this.initialWindow()
					this.walletError = true
				}
			},
			dkzh() {
				// console.log(0)
				this.walletUser = true
				this.ethAdss = this.ethAdss + this.showAccount;
			},
			dkqblj() {
				// this.walletUser = false
				this.initialWindow()
				this.walletVis = true
				sessionStorage.removeItem('userKey')
				this.$parent.sxsjjm()
			},
			fzzh(a) {

				let input = document.createElement("input"); // 直接构建input
				input.value = a; // 设置内容
				document.body.appendChild(input); // 添加临时实例
				input.select(); // 选择实例内容
				document.execCommand("Copy"); // 执行复制
				this.$message.success("复制成功");
				document.body.removeChild(input); // 删除临时实例
			},
		},
	}
</script>

<style scoped lang="less">
	.user-cot {
		border: 1px solid #dcdfe6;
		padding: 15px;
		border-radius: 8px;
	}

	.wallet-dklj {
		border: 1px solid #df2020;
		color: #df2020;
		background-color: transparent;
		padding: 8px;
		font-weight: 400;
	}

	.wallet-xzys:hover {
		border: 1px solid #df2020;
	}

	.wallet-fwtk {
		box-sizing: border-box;
		margin: 0;
		min-width: 0;
		font-weight: 400;
		font-size: 12px;
	}

	.cot-grid {
		display: grid;
		grid-auto-rows: auto;
		grid-row-gap: 16px;
	}

	.wallet-grid {
		display: grid;
		grid-row-gap: 10px;
	}

	.wallet-cont {
		background: #f2f2f2;
		padding: 15px;
		border-radius: 8px;
		border: 1px solid #f2f2f2;

		.wallet-font {
			line-height: 1.5rem;
		}
	}

	.wallet-img {
		img {
			width: 1.5rem;
			height: 1.5rem;

		}
	}
</style>
