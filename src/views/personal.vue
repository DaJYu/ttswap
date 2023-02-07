<!-- 个人中心 -->
<template>
	<div>
		<div v-if="userKey==null">

		</div>
		<div v-else>
			<div class="per-header">
				<el-descriptions title="" :colon="false">
					<el-descriptions-item label="ID">{{slid}}</el-descriptions-item>
					<el-descriptions-item label="总资产">{{countETH}}</el-descriptions-item>
				</el-descriptions>
			</div>
			<div class="site-content">

				<el-tabs class="tab-top" v-model="activeName" @tab-click="handleClick">
					<el-tab-pane label="持仓情况" name="position">
						<div style="padding-top: 20px;">
							<BasicsTable :dateList="dateList" :headerList="headerList"></BasicsTable>
						</div>
					</el-tab-pane>
					<el-tab-pane label="投资情况" name="Investment">
						<div style="padding-top: 20px;">
							<BasicsTable :dateList="dateList" :headerList="headerList"></BasicsTable>
						</div>
					</el-tab-pane>
				</el-tabs>
				<el-tabs class="tab-top" v-model="activeName1" @tab-click="handleClick">
					<el-tab-pane label="交易记录" name="transactions">
						<div style="padding-top: 20px;">
							<BasicsTable :dateList="dateList" :headerList="headerList"></BasicsTable>
						</div>
					</el-tab-pane>
					<el-tab-pane label="投资记录" name="Investment-jl">
						<div style="padding-top: 20px;">
							<BasicsTable :dateList="dateList" :headerList="headerList"></BasicsTable>
						</div>
					</el-tab-pane>
				</el-tabs>
				<el-tabs class="tab-top" v-model="activeName2" @tab-click="handleClick">
					<el-tab-pane label="持仓收藏" name="position-sc">
						<template>
							<ul class="currency" @click="currencyClick" v-if="currencyList.length">
								<li v-for="item in currencyList" :class="{'currency-active': styles === item.name}"
									:id="item.name">
									{{item.name}}
								</li>
							</ul>
						</template>
						<InvestTable :dateList="dateList"></InvestTable>
					</el-tab-pane>
					<el-tab-pane label="投资收藏" name="Investment-sc">
						<template>
							<ul class="currency" @click="currencyClick" v-if="currencyList.length">
								<li v-for="item in currencyList" :class="{'currency-active': styles === item.name}"
									:id="item.name">
									{{item.name}}
								</li>
							</ul>
						</template>
						<InvestTable :dateList="dateList"></InvestTable>
					</el-tab-pane>
				</el-tabs>
			</div>
		</div>
	</div>
</template>

<script>
	import BasicsTable from '@/components/table/basics-table'
	import InvestTable from '@/components/table/invest-table'
	import {getETH} from '@/components/wallet/wallets.js'
	export default {
		name: "personal",
		data() {
			return {
				activeName: 'position',
				activeName1: 'transactions',
				activeName2: 'position-sc',
				dateList: [],
				headerList: [],
				currencyList: [],
				styles: 'USDT',
				userKey: null,
				slid: null,
				countETH: 0,

			};
		},
		components: {
			BasicsTable,
			InvestTable
		},
		mounted() {
			this.currency()
		},
		created() {
			this.position()
			this.grzxsj()
		},
		methods: {
			grzxsj() {
				let userId = sessionStorage.getItem('userKey')
				this.userKey = userId
				if (userId != null) {
					this.slid = userId.substr(0, 4) + "..." + userId.substr((userId.length - 4), 4)
				}
				getETH()
			},
			handleClick(tab, event) {

			},
			position() {
				this.$http({
					url: this.$http.adornUrl("/table/business"),
					method: "get",
				}).then(({
					data
				}) => {
					// console.log(data.data[1].cont)
					this.dateList = data.data[1].cont;
					this.headerList = data.data[0].header;

				});
			},
			currencyClick(e) {
				this.styles = e.srcElement.id
				// console.log(e.srcElement.id)
			},
			currency() {
				this.$http({
					url: this.$http.adornUrl("/currency"),
					method: "get",
				}).then(({
					data
				}) => {
					this.currencyList = data.data;
				});
			}
		},
	}
</script>

<style scoped lang="less">
	.per-header {
		padding: 30px;
		background-color: #ffffff;
	}

	.el-descriptions {
		font-weight: 600;
		font-size: 16px;
	}

	.tab-top {
		background: #fff;
		margin-top: 20px;
		padding: 20px;
	}

	.currency {
		padding-bottom: 20px;

		li {
			margin: 0 20px;
			height: 40px;
			box-sizing: border-box;
			line-height: 40px;
			display: inline-block;
			list-style: none;
			font-size: 14px;
			font-weight: 500;
			color: #303133;
			cursor: pointer;
			position: relative;

			&:hover {
				color: #409EFF;
				border-bottom: 2px solid #409EFF;
			}
		}

		.currency-active {
			color: #409EFF;
			border-bottom: 2px solid #409EFF;
		}

	}
</style>
